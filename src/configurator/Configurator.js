import * as THREE from 'three';
import { Scene } from './Scene.js';
import { TapBarModel } from './TapBarModel.js';

/**
 * Bindeglied zwischen 3D-Szene, Modell und UI.
 * Hält den Konfigurations-Zustand und reicht Änderungen ans Modell weiter.
 */
export class Configurator {
  constructor(canvas, data) {
    this.data = data;
    this.scene = new Scene(canvas);
    this.model = new TapBarModel();
    this.scene.add(this.model.group);

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this._selectListeners = [];

    this.state = this._initialState();
    this.applyProduct(this.state.productId, true);
    this._bindPointer(canvas);
  }

  _initialState() {
    const colors = {};
    for (const p of this.data.parts) colors[p.id] = p.default;
    const product = this.data.products.find((p) => p.id === this.data.defaultProductId);
    return {
      productId: product.id,
      tileCount: product.tileCount,
      colors,
      tiles: this._defaultTiles(product.tileCount),
      logoText: this.data.brand,
      logoImage: null,
      logoTransform: { zoom: 1, x: 0, y: 0 },
      selected: 'tile',
      selectedTile: null,
    };
  }

  _defaultTiles(n) {
    const presets = ['star', 'camera', 'globe', 'chat', 'music', 'play', 'cart', 'qr'];
    return Array.from({ length: n }, (_, i) => ({ icon: presets[i % presets.length], link: '' }));
  }

  /** Produktwechsel → Modell mit passender Kachelzahl neu aufbauen. */
  applyProduct(id, initial = false) {
    const product = this.data.products.find((p) => p.id === id);
    if (!product) return;
    this.state.productId = id;
    this.state.tileCount = product.tileCount;

    const tiles = this.state.tiles.slice(0, product.tileCount);
    const defaults = this._defaultTiles(product.tileCount);
    while (tiles.length < product.tileCount) tiles.push(defaults[tiles.length]);
    this.state.tiles = tiles;

    for (const [part, hex] of Object.entries(this.state.colors)) this.model.setColor(part, hex);
    this.model.build({
      tileCount: this.state.tileCount,
      tiles: this.state.tiles,
      logoText: this.state.logoText,
      logoImage: this.state.logoImage,
      logoTransform: this.state.logoTransform,
      large: !!product.large,
    });
    this.model.setSelected(this.state.selected);
    if (!initial) this._emitSelect();
  }

  setColor(part, hex) {
    this.state.colors[part] = hex;
    this.model.setColor(part, hex);
  }

  selectPart(part, tileIndex = null) {
    this.state.selected = part;
    this.state.selectedTile = tileIndex;
    this.model.setSelected(part);
    this._emitSelect();
  }

  setTileIcon(i, iconId) {
    if (!this.state.tiles[i]) return;
    this.state.tiles[i].icon = iconId;
    this.model.setTileIcon(i, iconId);
  }

  setTileLink(i, value) {
    if (this.state.tiles[i]) this.state.tiles[i].link = value;
  }

  setLogoText(text) {
    this.state.logoText = text;
    this.model.setLogo({ text, image: this.state.logoImage, transform: this.state.logoTransform });
  }

  setLogoImage(image) {
    this.state.logoImage = image;
    if (!image) this.state.logoTransform = { zoom: 1, x: 0, y: 0 };
    this.model.setLogo({ text: this.state.logoText, image, transform: this.state.logoTransform });
  }

  setLogoTransform(partial) {
    this.state.logoTransform = { ...this.state.logoTransform, ...partial };
    this.model.setLogo({
      text: this.state.logoText,
      image: this.state.logoImage,
      transform: this.state.logoTransform,
    });
  }

  getProduct() {
    return this.data.products.find((p) => p.id === this.state.productId);
  }

  /** Exportierbarer Konfigurations-Zustand (Basis für Warenkorb / Bestellung). */
  exportConfig() {
    const product = this.getProduct();
    return {
      product: { id: product.id, name: product.name, price: product.price },
      currency: this.data.currency,
      colors: { ...this.state.colors },
      logo: { text: this.state.logoText, hasImage: !!this.state.logoImage },
      tiles: this.state.tiles.map((t, i) => ({ position: i + 1, icon: t.icon, link: t.link })),
    };
  }

  onSelect(cb) {
    this._selectListeners.push(cb);
  }

  _emitSelect() {
    const payload = { part: this.state.selected, tileIndex: this.state.selectedTile };
    for (const cb of this._selectListeners) cb(payload);
  }

  _bindPointer(canvas) {
    let downX = 0;
    let downY = 0;
    canvas.addEventListener('pointerdown', (e) => {
      downX = e.clientX;
      downY = e.clientY;
    });
    canvas.addEventListener('pointerup', (e) => {
      if (Math.hypot(e.clientX - downX, e.clientY - downY) > 6) return; // war ein Drag, kein Klick
      const rect = canvas.getBoundingClientRect();
      this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.raycaster.setFromCamera(this.pointer, this.scene.camera);
      const hits = this.raycaster.intersectObjects(this.model.pickables, false);
      if (hits.length) {
        const ud = hits[0].object.userData;
        this.selectPart(ud.part, ud.tileIndex ?? null);
      }
    });
  }
}
