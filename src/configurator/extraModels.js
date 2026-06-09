import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { plastic, metal, embossText, embossLabel, mountIcon } from './modelKit.js';

const TILE = 2.6;
const TILE_H = 0.5;
const TILE_R = 0.42;
const GAP = 0.7;

// Standard-Materialsatz (einfärbbar) + gemeinsame Helfer für die flachen Typen.
function baseMaterials() {
  return {
    base: plastic('#F2F1EB', 0.6),
    tile: plastic('#F2F1EB', 0.4),
    icon: plastic('#1C1C1C', 0.45),
    logo: plastic('#1C1C1C', 0.42),
    frame: plastic('#F2F1EB', 0.5),
  };
}

class FlatModel {
  constructor() {
    this.group = new THREE.Group();
    this.pickables = [];
    this.materials = baseMaterials();
  }
  setColor(part, hex) {
    this.materials[part]?.color.set(hex);
  }
  _add(mesh) {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.group.add(mesh);
    this.pickables.push(mesh);
    return mesh;
  }
  // Reihe quadratischer Front-Kacheln (Vorderseite +Z) inkl. Icons.
  _tileRow(tiles, { y, frontZ, tileSize = TILE }) {
    const n = tiles.length;
    const rowW = n * tileSize + (n - 1) * GAP;
    const z = frontZ + TILE_H / 2;
    tiles.forEach((t, i) => {
      const x = -rowW / 2 + tileSize / 2 + i * (tileSize + GAP);
      const tile = this._add(
        new THREE.Mesh(new RoundedBoxGeometry(tileSize, tileSize, TILE_H, 4, TILE_R), this.materials.tile)
      );
      tile.position.set(x, y, z);
      mountIcon(tile, t.icon, this.materials.icon, { size: tileSize * 0.62, z: TILE_H / 2 + 0.02 });
    });
  }
}

/** Tap Board — flache Platte (Wand/Theke) mit Namen oben und Kachelreihe unten. */
export class TapBoardModel extends FlatModel {
  build({ tileCount, tiles, logoText }) {
    const innerW = tileCount * TILE + (tileCount - 1) * GAP;
    const W = innerW + 3.2;
    const H = TILE + 6.2;
    const T = 1.1;
    const frontZ = T / 2;

    const board = this._add(new THREE.Mesh(new RoundedBoxGeometry(W, H, T, 4, 0.7), this.materials.base));
    board.position.set(0, 0, 0);

    const name = embossText(logoText || 'Tap Board', W * 0.5, this.materials.logo.color.getStyle());
    name.position.set(-W * 0.16, H * 0.24, frontZ + 0.06);
    this._add(name);

    this._tileRow(tiles, { y: -H / 2 + TILE / 2 + 1.3, frontZ });

    const label = embossLabel('(( TIPPEN ))', W * 0.42);
    label.position.set(0, -H / 2 + 0.7, frontZ + 0.06);
    this._add(label);
  }
}

/** Tap Base — schlichte flache Leiste mit Kachelreihe, ohne Namensfeld. */
export class TapBaseModel extends FlatModel {
  build({ tileCount, tiles }) {
    const innerW = tileCount * TILE + (tileCount - 1) * GAP;
    const W = innerW + 1.8;
    const H = TILE + 2.0;
    const T = 0.9;
    const frontZ = T / 2;

    const strip = this._add(new THREE.Mesh(new RoundedBoxGeometry(W, H, T, 3, 0.5), this.materials.base));
    strip.position.set(0, 0, 0);

    this._tileRow(tiles, { y: 0.35, frontZ });

    const label = embossLabel('(( TIPPEN ))', W * 0.5);
    label.position.set(0, -H / 2 + 0.5, frontZ + 0.06);
    this._add(label);
  }
}

/** Tap Tile — einzelne Kachel als Schlüsselanhänger (mit Ring + Verbinder). */
export class TapTileModel extends FlatModel {
  build({ tiles }) {
    const t = (tiles && tiles[0]) || { icon: 'globe' };
    const backSize = TILE + 0.9;
    const frontZ = 0.25;

    const backing = this._add(
      new THREE.Mesh(new RoundedBoxGeometry(backSize, backSize, 0.5, 4, 0.45), this.materials.base)
    );

    const tile = this._add(
      new THREE.Mesh(new RoundedBoxGeometry(TILE, TILE, TILE_H, 4, TILE_R), this.materials.tile)
    );
    tile.position.set(0, 0, frontZ + TILE_H / 2);
    mountIcon(tile, t.icon, this.materials.icon, { size: TILE * 0.62, z: TILE_H / 2 + 0.02 });

    // Lasche oben + Ring + Verbinder (Metall)
    const tab = this._add(new THREE.Mesh(new RoundedBoxGeometry(1.0, 0.9, 0.5, 3, 0.2), this.materials.base));
    tab.position.set(0, backSize / 2 + 0.25, 0);

    const metalMat = metal();
    const link = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.13, 12, 24), metalMat);
    link.position.set(0, backSize / 2 + 0.9, 0);
    this._add(link);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.17, 14, 32), metalMat);
    ring.position.set(0, backSize / 2 + 2.1, 0);
    this._add(ring);
  }
}

/** Tap Snap — flache MagSafe-Karte mit vier Eck-Kacheln und Logo in der Mitte. */
export class TapSnapModel extends FlatModel {
  build({ tiles, logoText }) {
    const W = 9.5;
    const H = 12.5;
    const T = 0.7;
    const frontZ = T / 2;
    const card = this._add(new THREE.Mesh(new RoundedBoxGeometry(W, H, T, 5, 1.1), this.materials.base));
    card.position.set(0, 0, 0);

    const tileSize = 2.4;
    const ox = W / 2 - tileSize / 2 - 1.0;
    const oy = H / 2 - tileSize / 2 - 1.0;
    const corners = [
      [-ox, oy], [ox, oy], [-ox, -oy], [ox, -oy],
    ];
    const four = (tiles && tiles.length ? tiles : [{ icon: 'globe' }]);
    corners.forEach(([x, y], i) => {
      const tile = this._add(
        new THREE.Mesh(new RoundedBoxGeometry(tileSize, tileSize, TILE_H, 4, TILE_R), this.materials.tile)
      );
      tile.position.set(x, y, frontZ + TILE_H / 2);
      const icon = four[i % four.length].icon;
      mountIcon(tile, icon, this.materials.icon, { size: tileSize * 0.6, z: TILE_H / 2 + 0.02 });
    });

    const name = embossText(logoText || 'Tap', W * 0.52, this.materials.logo.color.getStyle());
    name.position.set(0, 0.2, frontZ + 0.06);
    this._add(name);

    const label = embossLabel('(( TIPPEN ))', W * 0.55);
    label.position.set(0, -H / 2 + 0.8, frontZ + 0.06);
    this._add(label);
  }
}
