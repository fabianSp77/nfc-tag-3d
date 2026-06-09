import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { TapBarModel } from '../configurator/TapBarModel.js';

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

    this.scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(12, 20, 16);
    this.scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.5);
    fill.position.set(-16, 9, 9);
    this.scene.add(fill);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x9a958a, 0.4));

    this.camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 200);
    this.camera.position.set(20, 15, 30);
    this.camera.lookAt(0, 5.2, 1.2);
  }

  async shoot({ tileCount, tiles, colors }) {
    const model = new TapBarModel();
    if (colors) for (const [p, hex] of Object.entries(colors)) model.setColor(p, hex);
    model.build({ tileCount, tiles, logoText: 'Tap', logoImage: null });
    this.scene.add(model.group);

    // zwei Frames warten, damit die gebündelten Icons montiert sind
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    this.renderer.render(this.scene, this.camera);
    const url = this.renderer.domElement.toDataURL('image/png');

    this.scene.remove(model.group);
    model.pickables.forEach((m) => m.geometry?.dispose());
    Object.values(model.materials).forEach((m) => m.dispose());
    return url;
  }

  dispose() {
    this.renderer.dispose();
    this.renderer.forceContextLoss?.();
  }
}
