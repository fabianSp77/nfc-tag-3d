import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { loadIconGeometry } from './icons.js';

// Maße in cm (Tap Bar 4 ≈ 185 × 57 × 115 mm laut Vorbild-Produktseite).
const TILE = 2.6;
const TILE_H = 0.55;
const TILE_R = 0.42;
const GAP = 0.7;
const SIDE_MARGIN = 1.7;
const SHELF_D = 4.3;
const SHELF_H = 1.4;
const PANEL_T = 1.3;
const PANEL_H = 11.5;
const PANEL_R = 0.9;
const HILITE = new THREE.Color('#2f6fe0');

// Theken-Pose: Rückwand neigt sich leicht nach hinten, die Kachel-Ablage
// schrägt nach vorne/oben — so wie das Teil auf dem Tresen steht und der
// Kunde schräg von oben draufschaut.
const PANEL_TILT = -0.13; // Rückwand neigt leicht nach hinten (Sockel bleibt flach)
const TILE_UP = 0.1; // Kacheln leicht nach vorne/oben angeschrägt

/**
 * Prozedural erzeugter Tap-Bar-Aufsteller.
 * Rückwand und Ablage liegen in eigenen Gruppen, damit sie unterschiedlich
 * geneigt werden können (Theken-Pose).
 */
export class TapBarModel {
  constructor() {
    this.group = new THREE.Group();
    this.pickables = [];
    this._tileMeshes = [];
    this._iconMeshes = [];
    this._iconTokens = [];
    this._logoMeshes = [];
    this._disposable = [];
    this._selected = null;
    this.materials = this._createMaterials();
    this._captionTex = null;
    this._logoImgMat = null;
  }

  _createMaterials() {
    const make = (hex, roughness) =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(hex),
        roughness,
        metalness: 0.0,
        envMapIntensity: 0.7,
      });
    const materials = {
      base: make('#F2F1EB', 0.62),
      frame: make('#1C1C1C', 0.5),
      tile: make('#1C1C1C', 0.36),
      icon: make('#FFFFFF', 0.46),
      logo: make('#1C1C1C', 0.42),
    };
    for (const m of Object.values(materials)) m.emissiveIntensity = 0.0;
    return materials;
  }

  /** Komplett-Aufbau (bei Produktwechsel / Kachelzahl-Änderung). */
  build({ tileCount, tiles, logoText, logoImage, large = false, logoTransform }) {
    this._clear();

    this._panelH = large ? PANEL_H * 1.42 : PANEL_H;
    const sideMargin = SIDE_MARGIN + (large ? 1.6 : 0);
    const innerWidth = tileCount * TILE + (tileCount - 1) * GAP;
    const width = innerWidth + 2 * sideMargin;
    this._lastWidth = width;

    // Neigungs-Gruppen
    this._panelGroup = new THREE.Group();
    this._trayGroup = new THREE.Group();
    // Sockel/Ablage bleiben flach (Produkt steht gerade auf dem Tresen); nur die
    // Rückwand neigt sich – um die Unterkante gepivotet (y-Ausgleich), damit der
    // Sockel weiter auf y=0 aufsetzt.
    this._panelGroup.rotation.x = PANEL_TILT;
    this._panelGroup.position.y = (PANEL_T / 2) * Math.abs(Math.sin(PANEL_TILT));
    this.group.add(this._panelGroup, this._trayGroup);

    this._buildPanel(width);
    this._buildFrame(width);
    this._buildLogo(width, logoText, logoImage, logoTransform);
    this._buildInstruction(width);
    this._buildShelf(width);
    this._buildBaseLabel(width);
    this._buildTiles(tileCount, innerWidth);

    tiles.forEach((t, i) => this.setTileIcon(i, t.icon));
    if (this._selected) this.setSelected(this._selected);
  }

  _buildPanel(width) {
    const panel = new THREE.Mesh(
      this._track(new RoundedBoxGeometry(width, this._panelH, PANEL_T, 4, PANEL_R)),
      this.materials.base
    );
    panel.position.set(0, this._panelH / 2, 0);
    this._addPart(panel, 'base', this._panelGroup);
  }

  _buildShelf(width) {
    const shelf = new THREE.Mesh(
      this._track(new RoundedBoxGeometry(width, SHELF_H, SHELF_D, 3, 0.4)),
      this.materials.base
    );
    shelf.position.set(0, SHELF_H / 2, PANEL_T / 2 + SHELF_D / 2 - 0.3);
    this._addPart(shelf, 'base', this._trayGroup);
  }

  _buildFrame(width) {
    const z = PANEL_T / 2 + 0.09;
    const bar = 0.5;
    const depth = 0.34;
    const x0 = width / 2 - 1.4;
    const yTop = this._panelH - 1.5;
    const yBot = SHELF_H + 1.7;
    const innerW = 2 * x0;
    const innerH = yTop - yBot;
    const cy = (yTop + yBot) / 2;

    const add = (w, h, x, y) => {
      const m = new THREE.Mesh(
        this._track(new RoundedBoxGeometry(w, h, depth, 2, depth * 0.45)),
        this.materials.frame
      );
      m.position.set(x, y, z);
      this._addPart(m, 'frame', this._panelGroup);
    };
    add(innerW + bar, bar, 0, yTop);
    add(innerW + bar, bar, 0, yBot);
    add(bar, innerH + bar, -x0, cy);
    add(bar, innerH + bar, x0, cy);

    this._frameArea = { cx: 0, cy, w: innerW, h: innerH, z: z + 0.05 };
  }

  // ---- Logo (Bild verzerrungsfrei + zuschneidbar) + Textzeile darunter -----

  _buildLogo(width, logoText, logoImage, logoTransform) {
    this._clearLogo();
    const t = logoTransform || {};
    const align = t.align || 'center';
    const scale = t.scale || 1;
    const zoom = t.zoom || 1;
    this._logoText = logoText;
    this._logoImage = logoImage;
    this._logoTransform = { align, scale, zoom };

    const area = this._frameArea;
    const hasImg = !!logoImage;
    const hasText = !!(logoText && String(logoText).trim());
    // Block links/mittig/rechts auf der Rückwand positionieren.
    const ax = area.cx + (align === 'left' ? -area.w * 0.18 : align === 'right' ? area.w * 0.18 : 0);

    if (hasImg) {
      const w = area.w * 0.62 * scale;
      const h = area.h * (hasText ? 0.48 : 0.68) * scale;
      const mesh = this._imageRegionMesh(logoImage, zoom, w, h);
      mesh.position.set(ax, area.cy + (hasText ? area.h * 0.18 : 0), area.z);
      mesh.renderOrder = 2;
      this._addLogoMesh(mesh);
    }
    if (hasText) {
      const w = area.w * 0.66 * scale;
      const h = (hasImg ? area.h * 0.24 : area.h * 0.6) * scale;
      const mesh = this._captionRegionMesh(logoText, w, h);
      mesh.position.set(ax, hasImg ? area.cy - area.h * 0.26 : area.cy, area.z);
      mesh.renderOrder = 2;
      this._addLogoMesh(mesh);
    }
  }

  // Bild in eine feste Region zeichnen: Standard = „contain" (keine Verzerrung),
  // zoom/x/y erlauben Zuschnitt (Hineinzoomen + Verschieben).
  _imageRegionMesh(image, zoom, w, h) {
    const aspect = w / h;
    const CW = 512;
    const CH = Math.max(64, Math.round(512 / aspect));
    const c = document.createElement('canvas');
    c.width = CW;
    c.height = CH;
    const ctx = c.getContext('2d');
    const base = Math.min(CW / image.width, CH / image.height);
    const s = base * (zoom || 1); // contain · zoom = zuschneiden
    const dw = image.width * s;
    const dh = image.height * s;
    ctx.drawImage(image, (CW - dw) / 2, (CH - dh) / 2, dw, dh);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    this._logoImgMat?.dispose();
    this._logoImgMat = new THREE.MeshStandardMaterial({
      map: tex,
      transparent: true,
      alphaTest: 0.02,
      roughness: 0.5,
      metalness: 0,
    });
    return new THREE.Mesh(this._track(new THREE.PlaneGeometry(w, h)), this._logoImgMat);
  }

  // Textzeile mit automatischer Schriftgröße (1–2 Zeilen je nach Länge).
  _captionRegionMesh(text, w, h) {
    const aspect = w / h;
    const CW = 512;
    const CH = Math.max(64, Math.round(512 / aspect));
    const c = document.createElement('canvas');
    c.width = CW;
    c.height = CH;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const maxW = CW * 0.94;
    const maxH = CH * 0.86;
    const t = String(text).trim();
    let lines = [t];
    let font = this._fitFont(ctx, lines, maxW, maxH);
    if (font < maxH * 0.46) {
      lines = this._wrapTwo(t);
      font = this._fitFont(ctx, lines, maxW, maxH);
    }
    ctx.font = `700 ${font}px Georgia, "Times New Roman", serif`;
    const lineH = font * 1.14;
    const y0 = CH / 2 - ((lines.length - 1) * lineH) / 2;
    lines.forEach((l, i) => ctx.fillText(l, CW / 2, y0 + i * lineH));
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    this._captionTex?.dispose();
    this._captionTex = tex;
    const mat = this.materials.logo;
    mat.alphaMap = tex;
    mat.alphaTest = 0.45;
    mat.transparent = false;
    mat.needsUpdate = true;
    return new THREE.Mesh(this._track(new THREE.PlaneGeometry(w, h)), mat);
  }

  _fitFont(ctx, lines, maxW, maxH) {
    let f = Math.min(maxH / (lines.length * 1.15), 200);
    while (f > 14) {
      ctx.font = `700 ${Math.floor(f)}px Georgia, serif`;
      const widest = Math.max(...lines.map((l) => ctx.measureText(l).width));
      if (widest <= maxW) break;
      f -= 3;
    }
    return Math.floor(f);
  }

  _wrapTwo(text) {
    const words = text.split(/\s+/);
    if (words.length < 2) return [text];
    let best = 1;
    let bestDiff = Infinity;
    for (let i = 1; i < words.length; i++) {
      const a = words.slice(0, i).join(' ').length;
      const b = words.slice(i).join(' ').length;
      if (Math.abs(a - b) < bestDiff) {
        bestDiff = Math.abs(a - b);
        best = i;
      }
    }
    return [words.slice(0, best).join(' '), words.slice(best).join(' ')];
  }

  // Erklärung über den Kacheln: „HIER ANTIPPEN" + Pfeile zu den Kacheln.
  _buildInstruction(width) {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 200;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '700 56px "Hanken Grotesk", Arial, sans-serif';
    ctx.fillText('HIER ANTIPPEN', 256, 52);
    ctx.font = '700 60px Arial, sans-serif';
    ctx.fillText('▾     ▾     ▾', 256, 144);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    this._instrTex?.dispose();
    this._instrTex = tex;
    this._instrMat?.dispose();
    this._instrMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#2c2c2c'),
      roughness: 0.5,
      metalness: 0,
      alphaMap: tex,
      alphaTest: 0.5,
    });
    const w = Math.min(width * 0.5, 7);
    const mesh = new THREE.Mesh(this._track(new THREE.PlaneGeometry(w, (w * 200) / 512)), this._instrMat);
    mesh.position.set(0, SHELF_H + 1.15, PANEL_T / 2 + 0.07);
    mesh.renderOrder = 2;
    this._addPart(mesh, 'base', this._panelGroup);
  }

  _buildBaseLabel(width) {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 96;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 52px "Hanken Grotesk", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('(( TIPPEN ))', 256, 52);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    this._labelTex?.dispose();
    this._labelTex = tex;
    this._labelMat?.dispose();
    this._labelMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#2c2c2c'),
      roughness: 0.5,
      metalness: 0,
      alphaMap: tex,
      alphaTest: 0.5,
    });
    const w = Math.min(width * 0.5, 6);
    const frontZ = PANEL_T / 2 + SHELF_D - 0.3 + 0.01;
    const label = new THREE.Mesh(this._track(new THREE.PlaneGeometry(w, (w * 96) / 512)), this._labelMat);
    label.position.set(0, SHELF_H * 0.5, frontZ);
    label.renderOrder = 2;
    this._addPart(label, 'base', this._trayGroup);
  }

  _buildTiles(tileCount, innerWidth) {
    this._tileMeshes = [];
    const z = PANEL_T / 2 + SHELF_D - TILE / 2 - 0.55;
    const y = SHELF_H + TILE_H / 2;
    for (let i = 0; i < tileCount; i++) {
      const x = -innerWidth / 2 + TILE / 2 + i * (TILE + GAP);
      const tile = new THREE.Mesh(
        this._track(new RoundedBoxGeometry(TILE, TILE_H, TILE, 4, TILE_R)),
        this.materials.tile
      );
      tile.position.set(x, y, z);
      tile.rotation.x = TILE_UP; // leicht nach vorne/oben angeschrägt
      tile.userData.tileIndex = i;
      this._addPart(tile, 'tile', this._trayGroup);
      this._tileMeshes.push(tile);
    }
  }

  setTileIcon(index, iconId) {
    const tile = this._tileMeshes[index];
    if (!tile) return;
    const prev = this._iconMeshes[index];
    if (prev) {
      tile.remove(prev);
      this._removePickable(prev);
      prev.geometry?.dispose();
      this._iconMeshes[index] = null;
    }
    const token = (this._iconTokens[index] || 0) + 1;
    this._iconTokens[index] = token;
    loadIconGeometry(iconId)
      .then((geo) => {
        if (this._tileMeshes[index] !== tile || this._iconTokens[index] !== token) {
          geo.dispose();
          return;
        }
        const icon = new THREE.Mesh(geo, this.materials.icon);
        icon.rotation.x = -Math.PI / 2;
        icon.position.y = TILE_H / 2 + 0.01;
        icon.castShadow = true;
        icon.userData.part = 'icon';
        icon.userData.tileIndex = index;
        tile.add(icon);
        this._iconMeshes[index] = icon;
        this.pickables.push(icon);
        if (this._selected === 'icon') this._applyHighlight('icon', true);
      })
      .catch((err) => console.warn('Icon konnte nicht geladen werden:', iconId, err));
  }

  setColor(part, hex) {
    const mat = this.materials[part];
    if (mat) mat.color.set(hex);
  }

  /** Logo/Text/Zuschnitt aktualisieren (nur Logo-Teil neu bauen). */
  setLogo({ text, image, transform }) {
    this._buildLogo(this._lastWidth, text, image, transform);
    if (this._selected === 'logo') this._applyHighlight('logo', true);
  }

  setSelected(part) {
    if (this._selected && this._selected !== part) this._applyHighlight(this._selected, false);
    this._selected = part;
    this._applyHighlight(part, true);
  }

  _applyHighlight(part, on) {
    const mat = this.materials[part];
    if (!mat) return;
    if (on) {
      mat.emissive.copy(HILITE);
      mat.emissiveIntensity = 0.16;
    } else {
      mat.emissive.setRGB(0, 0, 0);
      mat.emissiveIntensity = 0.0;
    }
  }

  // ---- interne Helfer ----------------------------------------------------

  _addPart(mesh, part, target = this.group) {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.part = part;
    target.add(mesh);
    this.pickables.push(mesh);
  }

  _addLogoMesh(mesh) {
    mesh.castShadow = true;
    mesh.userData.part = 'logo';
    this._panelGroup.add(mesh);
    this.pickables.push(mesh);
    this._logoMeshes.push(mesh);
  }

  _clearLogo() {
    for (const m of this._logoMeshes) {
      m.parent?.remove(m);
      this._removePickable(m);
      m.geometry?.dispose();
    }
    this._logoMeshes = [];
  }

  _track(geo) {
    this._disposable.push(geo);
    return geo;
  }

  _removePickable(obj) {
    const i = this.pickables.indexOf(obj);
    if (i >= 0) this.pickables.splice(i, 1);
  }

  _clear() {
    for (const child of [...this.group.children]) this.group.remove(child);
    for (const g of this._disposable) g.dispose();
    this._disposable = [];
    this.pickables = [];
    this._iconMeshes = [];
    this._iconTokens = [];
    this._tileMeshes = [];
    this._logoMeshes = [];
  }
}
