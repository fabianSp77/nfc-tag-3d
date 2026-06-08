const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Scene-Bjz5dUwT.js","./three.module-Dp0OjpgJ.js","./TapBarModel-C3sE3lt8.js"])))=>i.map(i=>d[i]);
import{d as v}from"./products-Chze4tKd.js";const b="modulepreload",x=function(e,t){return new URL(e,t).href},p={},y=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");o=Promise.allSettled(n.map(s=>{if(s=x(s,r),s in p)return;p[s]=!0;const l=s.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(!!r)for(let m=a.length-1;m>=0;m--){const g=a[m];if(g.href===s&&(!l||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${f}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":b,l||(d.as="script"),d.crossOrigin="",d.href=s,u&&d.setAttribute("nonce",u),document.head.appendChild(d),l)return new Promise((m,g)=>{d.addEventListener("load",m),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${s}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return o.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})},E="hallo@tap-nfc.de",S=document.querySelector(".site-header"),$=()=>S.classList.toggle("scrolled",window.scrollY>8);$();window.addEventListener("scroll",$,{passive:!0});const w=new IntersectionObserver(e=>{for(const t of e)t.isIntersecting&&(t.target.classList.add("in"),w.unobserve(t.target))},{threshold:.12,rootMargin:"0px 0px -8% 0px"}),k=()=>document.querySelectorAll("[data-reveal]:not(.in)").forEach(e=>w.observe(e));function C(e,t){const i=Math.max(1,e),c=(320-(i*38+(i-1)*12))/2,u=138,s=["#e3a52a","#2f6f4e","#cf6b4c","#3b6fa0"];let l="";for(let f=0;f<i;f++){const h=c+f*50;l+=`<rect x="${h}" y="${u}" width="38" height="38" rx="9" fill="#1f1d1a"/>`,l+=`<circle cx="${h+38/2}" cy="${u+38/2}" r="6.5" fill="${s[f%s.length]}"/>`}return`<svg viewBox="0 0 320 220" role="img" aria-label="Illustration ${t}">
    <ellipse cx="160" cy="198" rx="116" ry="13" fill="#1f1d1a" opacity="0.06"/>
    <rect x="86" y="30" width="148" height="112" rx="16" fill="#fbfaf6" stroke="#e3dccd" stroke-width="1.5"/>
    <text x="160" y="78" text-anchor="middle" font-family="Fraunces, serif" font-weight="600" font-size="21" fill="#1f1d1a">Tap</text>
    <text x="160" y="104" text-anchor="middle" font-family="Fraunces, serif" font-weight="600" font-size="21" fill="#1f1d1a">${t}</text>
    <rect x="60" y="146" width="200" height="36" rx="11" fill="#ece4d4"/>
    ${l}
  </svg>`}function I(){const e=document.getElementById("produkt-grid");if(!e)return;const t=v.currencySymbol;e.innerHTML=v.range.map((n,r)=>{const o=n.configurable?`konfigurator.html?produkt=${n.id}`:"#kontakt",i=n.configurable?"Konfigurieren":"Anfragen",a=n.badge?`<span class="badge">${n.badge}</span>`:"";return`
      <a class="product-card" href="${o}" data-reveal style="transition-delay:${r*60}ms">
        ${a}
        <div class="product-vis">${C(n.tiles,n.label)}</div>
        <div class="product-body">
          <div class="product-name">${n.name}</div>
          <div class="product-tag">${n.tagline}</div>
          <div class="product-foot">
            <span class="product-price">${n.price} ${t}</span>
            <span class="product-action">${i} →</span>
          </div>
        </div>
      </a>`}).join("")}function _(){const e=document.getElementById("contact-form"),t=document.getElementById("form-note");e&&e.addEventListener("submit",n=>{if(n.preventDefault(),!e.reportValidity())return;const r=new FormData(e),o=`Anfrage von ${r.get("name")||"Website"}`,i=`Name: ${r.get("name")}
E-Mail: ${r.get("email")}
Telefon: ${r.get("phone")||"—"}

${r.get("message")||""}`;window.location.href=`mailto:${E}?subject=${encodeURIComponent(o)}&body=${encodeURIComponent(i)}`,t.hidden=!1,t.textContent="Dein E-Mail-Programm öffnet sich mit deiner Anfrage. Alternativ: schreib uns direkt."})}async function L(){const e=document.getElementById("hero-canvas");if(e)try{const[{Scene:t},{TapBarModel:n}]=await Promise.all([y(()=>import("./Scene-Bjz5dUwT.js"),__vite__mapDeps([0,1]),import.meta.url),y(()=>import("./TapBarModel-C3sE3lt8.js").then(i=>i.a),__vite__mapDeps([2,1]),import.meta.url)]),r=new t(e),o=new n;o.setColor("base","#F2F1EB"),o.setColor("frame","#1f1d1a"),o.setColor("tile","#245c3a"),o.setColor("icon","#ffffff"),o.setColor("logo","#1f1d1a"),r.add(o.group),o.build({tileCount:4,tiles:[{icon:"star"},{icon:"camera"},{icon:"chat"},{icon:"qr"}],logoText:"Tap",logoImage:null}),document.querySelector(".hero-loading")?.remove()}catch(t){console.warn("Hero-3D konnte nicht geladen werden:",t),document.querySelector(".hero-loading")?.remove()}}I();_();k();L();
