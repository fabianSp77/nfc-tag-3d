import './landing.css';
import data from '../data/products.json';

// E-Mail-Empfänger für das Kontaktformular (Platzhalter — bitte anpassen).
const CONTACT_EMAIL = 'hallo@tap-nfc.de';

/* ---- Header: Schatten/Blur ab erstem Scroll ----------------------------- */
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ---- Reveal beim Reinscrollen ------------------------------------------ */
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
);
const observeReveals = () => document.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => io.observe(el));

/* ---- Produkt-Grid aus products.json ------------------------------------ */
function productSvg(tiles, label) {
  const W = 320;
  const tileSize = 38;
  const gap = 12;
  const n = Math.max(1, tiles);
  const rowW = n * tileSize + (n - 1) * gap;
  const startX = (W - rowW) / 2;
  const tileY = 138;
  const dots = ['#e3a52a', '#2f6f4e', '#cf6b4c', '#3b6fa0'];
  let t = '';
  for (let i = 0; i < n; i++) {
    const x = startX + i * (tileSize + gap);
    t += `<rect x="${x}" y="${tileY}" width="${tileSize}" height="${tileSize}" rx="9" fill="#1f1d1a"/>`;
    t += `<circle cx="${x + tileSize / 2}" cy="${tileY + tileSize / 2}" r="6.5" fill="${dots[i % dots.length]}"/>`;
  }
  return `<svg viewBox="0 0 ${W} 220" role="img" aria-label="Illustration ${label}">
    <ellipse cx="160" cy="198" rx="116" ry="13" fill="#1f1d1a" opacity="0.06"/>
    <rect x="86" y="30" width="148" height="112" rx="16" fill="#fbfaf6" stroke="#e3dccd" stroke-width="1.5"/>
    <text x="160" y="78" text-anchor="middle" font-family="Fraunces, serif" font-weight="600" font-size="21" fill="#1f1d1a">Tap</text>
    <text x="160" y="104" text-anchor="middle" font-family="Fraunces, serif" font-weight="600" font-size="21" fill="#1f1d1a">${label}</text>
    <rect x="60" y="146" width="200" height="36" rx="11" fill="#ece4d4"/>
    ${t}
  </svg>`;
}

function renderProducts() {
  const grid = document.getElementById('produkt-grid');
  if (!grid) return;
  const sym = data.currencySymbol;
  grid.innerHTML = data.range
    .map((p, i) => {
      const href = p.configurable ? `konfigurator.html?produkt=${p.id}` : '#kontakt';
      const action = p.configurable ? 'Konfigurieren' : 'Anfragen';
      const badge = p.badge ? `<span class="badge">${p.badge}</span>` : '';
      return `
      <a class="product-card" href="${href}" data-id="${p.id}" data-reveal style="transition-delay:${i * 60}ms">
        ${badge}
        <div class="product-vis">${productSvg(p.tiles, p.label)}</div>
        <div class="product-body">
          <div class="product-name">${p.name}</div>
          <div class="product-tag">${p.tagline}</div>
          <div class="product-foot">
            <span class="product-price">${p.price} ${sym}</span>
            <span class="product-action">${action} →</span>
          </div>
        </div>
      </a>`;
    })
    .join('');
}

/* ---- Kontaktformular (ehrlich: öffnet das Mailprogramm) ----------------- */
function wireContactForm() {
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const f = new FormData(form);
    const subject = `Anfrage von ${f.get('name') || 'Website'}`;
    const body = `Name: ${f.get('name')}\nE-Mail: ${f.get('email')}\nTelefon: ${f.get('phone') || '—'}\n\n${f.get('message') || ''}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    note.hidden = false;
    note.textContent = 'Dein E-Mail-Programm öffnet sich mit deiner Anfrage. Alternativ: schreib uns direkt.';
  });
}

/* ---- 3D-Hero (nutzt die Konfigurator-Engine) --------------------------- */
async function mountHero() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  try {
    const [{ Scene }, { TapBarModel }] = await Promise.all([
      import('../configurator/Scene.js'),
      import('../configurator/TapBarModel.js'),
    ]);
    const scene = new Scene(canvas);
    const model = new TapBarModel();
    // Markenfarben für den Hero
    model.setColor('base', '#F2F1EB');
    model.setColor('frame', '#1f1d1a');
    model.setColor('tile', '#245c3a');
    model.setColor('icon', '#ffffff');
    model.setColor('logo', '#1f1d1a');
    scene.add(model.group);
    model.build({
      tileCount: 4,
      tiles: [{ icon: 'star' }, { icon: 'camera' }, { icon: 'chat' }, { icon: 'qr' }],
      logoText: 'Tap',
      logoImage: null,
    });
    document.querySelector('.hero-loading')?.remove();
  } catch (err) {
    console.warn('Hero-3D konnte nicht geladen werden:', err);
    document.querySelector('.hero-loading')?.remove();
  }
}

/* ---- Produktbilder aus dem eigenen 3D-Modell rendern ------------------- */
async function shootProductImages() {
  const stands = data.range.filter((p) => p.configurable && p.tiles >= 2);
  if (!stands.length) return;
  let shooter;
  try {
    const { ProductShooter } = await import('./productShots.js');
    shooter = new ProductShooter();
  } catch (err) {
    console.warn('Produkt-Renderer nicht verfügbar:', err);
    return;
  }
  const heroTiles = [{ icon: 'star' }, { icon: 'camera' }, { icon: 'chat' }, { icon: 'qr' }];
  const colors = { base: '#F2F1EB', frame: '#1f1d1a', tile: '#245c3a', icon: '#ffffff', logo: '#1f1d1a' };
  for (const p of stands) {
    try {
      const url = await shooter.shoot({ tileCount: p.tiles, tiles: heroTiles.slice(0, p.tiles), colors });
      const vis = document.querySelector(`.product-card[data-id="${p.id}"] .product-vis`);
      if (vis) {
        vis.classList.add('shot');
        vis.innerHTML = `<img src="${url}" alt="${p.name}" loading="lazy" />`;
      }
    } catch (err) {
      console.warn('Produkt-Render fehlgeschlagen:', p.id, err);
    }
  }
  shooter.dispose();
}

renderProducts();
wireContactForm();
observeReveals();
mountHero();
// Produktbilder verzögert rendern, damit der Hero zuerst lädt.
if ('requestIdleCallback' in window) requestIdleCallback(() => shootProductImages(), { timeout: 3000 });
else setTimeout(shootProductImages, 900);
