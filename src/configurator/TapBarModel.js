import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { loadIconGeometry } from './icons.js';

// Maße in cm (Tap Bar 4 ≈ 185 × 57 × 115 mm laut Vorbild-Produktseite).
const TILE = 2.6;       // Kachel-Kantenlänge
const TILE_H = 0.55;    // Kachel-Dicke
const TILE_R = 0.42;    // Kachel-Eckradius
const GAP = 0.7;        // Abstand zwischen Kacheln
const SIDE_MARGIN = 1.7;
const SHELF_D = 4.3;    // Tiefe der Ablage
const SHELF_H = 1.4;    // Höhe der Ablage
const PANEL_T = 1.3;    // Dicke der Rückwand
const PANEL_H = 11.5;   // Höhe der Rückwand
const PANEL_R = 0.9;    // Eckradius Rückwand
const HILITE = new THREE.Color('#2f6fe0');

/**
 * Prozedural erzeugter Tap-Bar-Aufsteller.
 * Einfärbbare Bauteilgruppen teilen sich je EIN Material, damit eine
 * Farbänderung die ganze Gruppe auf einmal trifft.
 */
export class TapBarModel {
  constructor() {
    this.group = new THREE.Group();
    this.pickables = [];          // Meshes für den Raycaster
    this._tileMeshes = [];        // Kachel-Meshes (für Icon-Nachladen)
    this._iconMeshes = [];        // aktuell montierte Icon-Meshes
    this._iconTokens = [];        // pro Kachel: Anfrage-Token gegen Race-Conditions
    this._disposable = [];        // Geometrien zum Aufräumen beim Rebuild
    this._selected = null;
    this.materials = this._createMaterials();
    this._logoTex = null;
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
  build({ tileCount, tiles, logoText, logoImage }) {
    this._clear();

    const innerWidth = tileCount * TILE + (tileCount - 1) * GAP;
    const width = innerWidth + 2 * SIDE_MARGIN;

    this._buildBase(width);
    this._buildFrame(width);
    this._buildLogo(width, logoText, logoImage);
    this._buildTiles(tileCount, innerWidth);

    // Icons asynchron montieren (poppen rein sobald extrudiert).
    tiles.forEach((t, i) => this.setTileIcon(i, t.icon));

    if (this._selected) this.setSelected(this._selected);
  }

  _buildBase(width) {
    // Rückwand (trägt Rahmen + Logo)
    const panel = new THREE.Mesh(
      this._track(new RoundedBoxGeometry(width, PANEL_H, PANEL_T, 4, PANEL_R)),
      this.materials.base
    );
    panel.position.set(0, PANEL_H / 2, 0);
    this._addPart(panel, 'base');

    // Ablage vorne (Kacheln liegen darauf)
    const shelf = new THREE.Mesh(
      this._track(new RoundedBoxGeometry(width, SHELF_H, SHELF_D, 3, 0.4)),
      this.materials.base
    );
    shelf.position.set(0, SHELF_H / 2, PANEL_T / 2 + SHELF_D / 2 - 0.3);
    this._addPart(shelf, 'base');
  }

  _buildFrame(width) {
    // Schmaler, erhabener Rahmen auf der Rückwand-Vorderseite (umrahmt das Logo).
    const z = PANEL_T / 2 + 0.09;
    const bar = 0.5;          // Stegbreite
    const depth = 0.34;
    const x0 = width / 2 - 1.4;
    const yTop = PANEL_H - 1.5;
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
      this._addPart(m, 'frame');
    };
    add(innerW + bar, bar, 0, yTop);           // oben
    add(innerW + bar, bar, 0, yBot);           // unten
    add(bar, innerH + bar, -x0, cy);           // links
    add(bar, innerH + bar, x0, cy);            // rechts

    this._frameArea = { cx: 0, cy, w: innerW, h: innerH, z: z + 0.05 };
  }

  _buildLogo(width, text, image) {
    const area = this._frameArea;
    const w = area.w * 0.82;
    const h = area.h * 0.66;
    this._updateLogoTexture(text, image);
    const mat = this.materials.logo;
    mat.alphaMap = this._logoTex;
    mat.alphaTest = 0.45;
    mat.transparent = false;
    mat.needsUpdate = true;

    const logo = new THREE.Mesh(this._track(new THREE.PlaneGeometry(w, h)), mat);
    logo.position.set(area.cx, area.cy, area.z);
    logo.renderOrder = 2;
    this._addPart(logo, 'logo');
    this._logoMesh = logo;
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
      tile.userData.tileIndex = i;
      this._addPart(tile, 'tile');
      this._tileMeshes.push(tile);
    }
  }

  /** Icon einer Kachel (neu) laden und montieren. */
  setTileIcon(index, iconId) {
    const tile = this._tileMeshes[index];
    if (!tile) return;
    // altes Icon entfernen
    const prev = this._iconMeshes[index];
    if (prev) {
      tile.remove(prev);
      this._removePickable(prev);
      prev.geometry?.dispose();
      this._iconMeshes[index] = null;
    }
    // Anfrage-Token: bei schnellem Icon-Wechsel (oder langsamer Verbindung)
    // werden zwischenzeitlich überholte Ladevorgänge verworfen, statt ein
    // zweites Icon auf dieselbe Kachel zu legen.
    const token = (this._iconTokens[index] || 0) + 1;
    this._iconTokens[index] = token;
    loadIconGeometry(iconId)
      .then((geo) => {
        if (this._tileMeshes[index] !== tile || this._iconTokens[index] !== token) {
          geo.dispose(); // veraltete Anfrage – Geometrie nicht montieren
          return;
        }
        const icon = new THREE.Mesh(geo, this.materials.icon);
        icon.rotation.x = -Math.PI / 2;               // flach auf die Kachel legen
        icon.position.y = TILE_H / 2 + 0.01;          // bündig auf der Oberseite
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

  setLogo({ text, image }) {
    this._updateLogoTexture(text, image);
    this.materials.logo.alphaMap = this._logoTex;
    this.materials.logo.needsUpdate = true;
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

  _updateLogoTexture(text, image) {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 256;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, 512, 256);
    if (image) {
      const ratio = Math.min(512 / image.width, 256 / image.height);
      const w = image.width * ratio;
      const h = image.height * ratio;
      ctx.drawImage(image, (512 - w) / 2, (256 - h) / 2, w, h);
    } else {
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 150px Georgia, "Times New Roman", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText((text || 'Tap').slice(0, 14), 256, 140);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    this._logoTex?.dispose();
    this._logoTex = tex;
  }

  _addPart(mesh, part) {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.part = part;
    this.group.add(mesh);
    this.pickables.push(mesh);
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
  }
}
