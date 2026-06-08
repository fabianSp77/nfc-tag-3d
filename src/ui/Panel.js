import { iconDataUri } from '../configurator/icons.js';

/**
 * Konfigurations-Panel (Vanilla-DOM). Spiegelt den Zustand des Configurators
 * und schreibt Änderungen zurück. Deutsche Oberfläche.
 */
export class Panel {
  constructor(root, configurator, data) {
    this.root = root;
    this.cfg = configurator;
    this.data = data;
    this.activePart = configurator.state.selected;
    this.refs = {};
    this._render();

    // Auswahl aus der 3D-Szene (Klick auf Bauteil) in der UI nachziehen.
    this.cfg.onSelect(({ part, tileIndex }) => {
      this.activePart = part;
      this._syncParts();
      this._syncPalette();
      if (tileIndex != null) this._focusTile(tileIndex);
    });
  }

  _render() {
    this.root.replaceChildren(
      this._header(),
      this._productSwitch(),
      this._colorsSection(),
      this._tilesSection(),
      this._logoSection(),
      this._footer()
    );
    this._syncParts();
    this._syncPalette();
    this._syncProduct();
  }

  // ---- Kopf + Produktwahl -------------------------------------------------

  _header() {
    const eyebrow = h('div', { class: 'eyebrow' }, 'NFC-Konfigurator');
    this.refs.name = h('h1', { class: 'product-name' });
    this.refs.tagline = h('p', { class: 'tagline' });
    return h('header', { class: 'panel-header' }, eyebrow, this.refs.name, this.refs.tagline);
  }

  _productSwitch() {
    this.refs.segment = h('div', { class: 'segment' });
    for (const p of this.data.products) {
      const btn = h('button', { type: 'button', 'data-id': p.id }, p.name);
      btn.addEventListener('click', () => {
        this.cfg.applyProduct(p.id);
        this._syncProduct();
        this._rebuildTiles();
      });
      this.refs.segment.append(btn);
    }
    return h('div', { class: 'block' }, this.refs.segment);
  }

  // ---- Farben -------------------------------------------------------------

  _colorsSection() {
    this.refs.parts = h('div', { class: 'parts' });
    for (const part of this.data.parts) {
      const swatch = h('span', { class: 'part-swatch', 'data-swatch': part.id });
      const row = h(
        'button',
        { type: 'button', class: 'part-row', 'data-part': part.id },
        swatch,
        h('span', { class: 'part-label' }, part.label)
      );
      row.addEventListener('click', () => this.cfg.selectPart(part.id));
      this.refs.parts.append(row);
    }

    this.refs.palette = h('div', { class: 'palette' });
    for (const c of this.data.palette) {
      const sw = h('button', {
        type: 'button',
        class: 'swatch',
        'data-hex': c.hex,
        title: `${c.name} · ${c.hex}`,
        style: `--c:${c.hex}`,
      });
      sw.addEventListener('click', () => this._pickColor(c.hex));
      this.refs.palette.append(sw);
    }

    this.refs.colorInput = h('input', { type: 'color', class: 'color-input', value: '#1c1c1c' });
    this.refs.colorInput.addEventListener('input', (e) => this._pickColor(e.target.value));

    this.refs.hexInput = h('input', {
      type: 'text',
      class: 'hex-input',
      maxlength: '7',
      spellcheck: 'false',
      placeholder: '#RRGGBB',
    });
    this.refs.hexInput.addEventListener('change', (e) => {
      const v = normalizeHex(e.target.value);
      if (v) this._pickColor(v);
      else this._syncPalette();
    });

    this.refs.cmyk = h('div', { class: 'cmyk' });

    return h(
      'section',
      { class: 'block' },
      h('h2', {}, 'Farben'),
      h('p', { class: 'hint' }, 'Bauteil wählen – im 3D-Modell oder hier – und Farbe zuweisen.'),
      this.refs.parts,
      this.refs.palette,
      h('div', { class: 'color-row' }, this.refs.colorInput, this.refs.hexInput),
      this.refs.cmyk
    );
  }

  _pickColor(hex) {
    this.cfg.setColor(this.activePart, hex);
    this._syncParts();
    this._syncPalette();
  }

  // ---- Kacheln ------------------------------------------------------------

  _tilesSection() {
    this.refs.tiles = h('div', { class: 'tiles' });
    this._rebuildTiles();
    return h(
      'section',
      { class: 'block' },
      h('h2', {}, 'Kacheln'),
      h('p', { class: 'hint' }, 'Pro Kachel ein Icon und ein Ziel-Link.'),
      this.refs.tiles
    );
  }

  _rebuildTiles() {
    if (!this.refs.tiles) return;
    this.refs.tiles.replaceChildren();
    this.refs.tileCards = [];

    this.cfg.state.tiles.forEach((tile, i) => {
      const grid = h('div', { class: 'icongrid' });
      for (const icon of this.data.icons) {
        const btn = h('button', {
          type: 'button',
          class: 'icon-btn',
          'data-icon': icon.id,
          title: icon.label,
        }, h('img', { src: iconDataUri(icon.id), alt: icon.label }));
        btn.addEventListener('click', () => {
          this.cfg.setTileIcon(i, icon.id);
          this._syncTileIcons(i);
        });
        grid.append(btn);
      }

      const link = h('input', {
        type: 'url',
        class: 'link-input',
        placeholder: 'https://deinlink.de',
        value: tile.link || '',
      });
      link.addEventListener('input', (e) => this.cfg.setTileLink(i, e.target.value));

      const card = h(
        'div',
        { class: 'tile-card', 'data-i': String(i) },
        h('div', { class: 'tile-head' }, `Kachel ${i + 1}`),
        grid,
        link
      );
      this.refs.tiles.append(card);
      this.refs.tileCards.push(card);
      this._syncTileIcons(i);
    });
  }

  _syncTileIcons(i) {
    const card = this.refs.tileCards?.[i];
    if (!card) return;
    const current = this.cfg.state.tiles[i].icon;
    card.querySelectorAll('.icon-btn').forEach((b) =>
      b.classList.toggle('active', b.dataset.icon === current)
    );
  }

  _focusTile(i) {
    const card = this.refs.tileCards?.[i];
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.remove('flash');
    void card.offsetWidth; // Reflow → Animation neu starten
    card.classList.add('flash');
  }

  // ---- Logo ---------------------------------------------------------------

  _logoSection() {
    const text = h('input', {
      type: 'text',
      class: 'logo-input',
      maxlength: '14',
      value: this.cfg.state.logoText,
      placeholder: 'Dein Logo-Text',
    });
    text.addEventListener('input', (e) => this.cfg.setLogoText(e.target.value));

    const file = h('input', { type: 'file', accept: 'image/png,image/svg+xml,image/jpeg', hidden: 'hidden' });
    file.addEventListener('change', (e) => this._onLogoFile(e.target.files[0]));
    const upload = h('label', { class: 'upload' }, 'Logo-Bild hochladen', file);

    return h(
      'section',
      { class: 'block' },
      h('h2', {}, 'Logo'),
      h('p', { class: 'hint' }, 'Text oder eigenes Bild auf der Rückwand.'),
      text,
      upload
    );
  }

  _onLogoFile(fileObj) {
    if (!fileObj) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => this.cfg.setLogoImage(img);
      img.src = reader.result;
    };
    reader.readAsDataURL(fileObj);
  }

  // ---- Fuß: Preis + Export ------------------------------------------------

  _footer() {
    this.refs.price = h('div', { class: 'price' });
    const cta = h('button', { type: 'button', class: 'cta', disabled: 'disabled' }, 'In den Warenkorb (bald)');
    const exportBtn = h('button', { type: 'button', class: 'ghost' }, 'Konfiguration kopieren');
    exportBtn.addEventListener('click', () => this._exportConfig(exportBtn));
    return h('footer', { class: 'panel-footer' }, this.refs.price, cta, exportBtn);
  }

  async _exportConfig(btn) {
    const json = JSON.stringify(this.cfg.exportConfig(), null, 2);
    try {
      await navigator.clipboard.writeText(json);
      const old = btn.textContent;
      btn.textContent = 'Kopiert ✓';
      setTimeout(() => (btn.textContent = old), 1500);
    } catch {
      console.log(json);
    }
  }

  // ---- Synchronisation ----------------------------------------------------

  _syncProduct() {
    const product = this.cfg.getProduct();
    this.refs.name.textContent = product.name;
    this.refs.tagline.textContent = product.tagline;
    this.refs.price.textContent = `${product.price} ${this.data.currencySymbol}`;
    this.refs.segment.querySelectorAll('button').forEach((b) =>
      b.classList.toggle('active', b.dataset.id === product.id)
    );
  }

  _syncParts() {
    for (const part of this.data.parts) {
      const hex = this.cfg.state.colors[part.id];
      const sw = this.refs.parts.querySelector(`[data-swatch="${part.id}"]`);
      if (sw) sw.style.background = hex;
      const row = this.refs.parts.querySelector(`[data-part="${part.id}"]`);
      if (row) row.classList.toggle('active', part.id === this.activePart);
    }
  }

  _syncPalette() {
    const hex = (this.cfg.state.colors[this.activePart] || '#000000').toLowerCase();
    this.refs.hexInput.value = hex;
    this.refs.colorInput.value = /^#[0-9a-f]{6}$/.test(hex) ? hex : '#000000';
    this.refs.palette.querySelectorAll('.swatch').forEach((s) =>
      s.classList.toggle('active', s.dataset.hex.toLowerCase() === hex)
    );
    this.refs.cmyk.textContent = `Druck (CMYK): ${rgbToCmyk(hex)}`;
  }
}

// ---- kleine Helfer --------------------------------------------------------

function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') el.className = v;
    else el.setAttribute(k, v);
  }
  for (const c of children.flat()) {
    if (c == null) continue;
    el.append(c.nodeType ? c : document.createTextNode(c));
  }
  return el;
}

function normalizeHex(value) {
  let v = (value || '').trim();
  if (!v) return null;
  if (v[0] !== '#') v = '#' + v;
  if (/^#[0-9a-fA-F]{3}$/.test(v)) {
    v = '#' + v.slice(1).split('').map((c) => c + c).join('');
  }
  return /^#[0-9a-fA-F]{6}$/.test(v) ? v.toLowerCase() : null;
}

// Für Druckvorschau (das Vorbild rechnet RGB → CMYK, Briefing §2.4).
function rgbToCmyk(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const k = 1 - Math.max(r, g, b);
  if (k >= 1) return '0 · 0 · 0 · 100';
  const c = Math.round(((1 - r - k) / (1 - k)) * 100);
  const m = Math.round(((1 - g - k) / (1 - k)) * 100);
  const y = Math.round(((1 - b - k) / (1 - k)) * 100);
  return `${c} · ${m} · ${y} · ${Math.round(k * 100)}`;
}
