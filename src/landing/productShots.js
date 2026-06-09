import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { TapBarModel } from '../configurator/TapBarModel.js';
import { TapBoardModel, TapBaseModel, TapTileModel, TapSnapModel } from '../configurator/extraModels.js';

const MODELS = {
  bar: TapBarModel,
  board: TapBoardModel,
  base: TapBaseModel,
  tile: TapTileModel,
  snap: TapSnapModel,
};

/**
 * Rendert Produkt-Stills aus dem EIGENEN 3D-Modell (Studio-Optik) — damit die
 * Produktkarten wie echte Fotos aussehen, aber rechtlich sauber dem Shop gehören.
 * Ein einziger Offscreen-Renderer erzeugt nacheinander alle Bilder und wird
 * danach freigegeben (genau ein WebGL-Kontext, kein Dauer-Render).
 */
export class ProductShooter {
  constructor(width = 720, height = 540) {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true, // nötig für toDataURL
    });
    this.renderer.setSize(width, height, false);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearAlpha(0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(12, 20, 16);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 90;
    const s = 22;
    key.shadow.camera.left = -s;
    key.shadow.camera.right = s;
    key.shadow.camera.top = s;
    key.shadow.camera.bottom = -s;
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.02;
    key.shadow.radius = 6;
    this.scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.5);
    fill.position.set(-16, 9, 9);
    this.scene.add(fill);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x9a958a, 0.4));

    this.camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 200);
    this.camera.position.set(20, 15, 30);
    this.camera.lookAt(0, 5.2, 1.2);
  }

  async shoot({ type = 'bar', tileCount, tiles, colors, logoText = 'Tap', large = false }) {
    const ModelClass = MODELS[type] || TapBarModel;
    const model = new ModelClass();
    if (colors) for (const [p, hex] of Object.entries(colors)) model.setColor(p, hex);
    if (type === 'bar') model.build({ tileCount, tiles, logoText, logoImage: null, large });
    else model.build({ tileCount, tiles, logoText });
    this.scene.add(model.group);

    this._frame(type, large);

    // zwei Frames warten, damit die gebündelten Icons montiert sind
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    this.renderer.render(this.scene, this.camera);
    const url = this.renderer.domElement.toDataURL('image/png');

    this.scene.remove(model.group);
    model.pickables.forEach((m) => m.geometry?.dispose());
    Object.values(model.materials).forEach((m) => m.dispose());
    return url;
  }

  // Kameraausschnitt je Produkttyp (die flachen Typen zeigen zur +Z-Seite).
  _frame(type, large) {
    const C = {
      bar: large ? [[24, 18, 36], [0, 7.6, 1.2]] : [[20, 15, 30], [0, 5.2, 1.2]],
      board: [[9, 8, 27], [0, 0, 0]],
      base: [[7, 7, 22], [0, 0, 0]],
      tile: [[6, 5, 17], [0, 1.0, 0]],
      snap: [[8, 6, 26], [0, 0, 0]],
    };
    const [pos, look] = C[type] || C.bar;
    this.camera.position.set(pos[0], pos[1], pos[2]);
    this.camera.lookAt(look[0], look[1], look[2]);
  }

  dispose() {
    this.renderer.dispose();
    this.renderer.forceContextLoss?.();
  }
}
