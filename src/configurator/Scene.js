import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/**
 * Studio-Szene: Renderer, Kamera, Licht, Umgebung und Steuerung.
 *
 * Die drei Hebel für den „teuren" Look (siehe Briefing §4):
 *   1. RoomEnvironment  → realistische PBR-Reflexionen
 *   2. weiche Schatten  → PCFSoftShadowMap
 *   3. ACESFilmicToneMapping → filmische Tonwerte
 */
export class Scene {
  constructor(canvas) {
    this.canvas = canvas;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.scene.background = this._gradientBackground();

    this.camera = new THREE.PerspectiveCamera(34, 1, 0.1, 400);
    this.camera.position.set(20, 15, 30);

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.enablePan = false;
    this.controls.minDistance = 16;
    this.controls.maxDistance = 70;
    this.controls.minPolarAngle = 0.15;
    this.controls.maxPolarAngle = Math.PI * 0.52; // nie unter den Boden schauen
    this.controls.target.set(0, 5.2, 1.2);
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.7;
    this.controls.addEventListener('start', () => { this.controls.autoRotate = false; });

    this._setupEnvironment();
    this._setupLights();
    this._setupGround();

    window.addEventListener('resize', () => this.resize());
    this.resize();
    this._tick();
  }

  // Sanfter vertikaler Studio-Verlauf als Hintergrund (nahtlose Sweep-Optik).
  _gradientBackground() {
    const c = document.createElement('canvas');
    c.width = 16;
    c.height = 256;
    const ctx = c.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0.0, '#f0eee7');
    g.addColorStop(0.55, '#e6e4dc');
    g.addColorStop(1.0, '#d2cfc4');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 16, 256);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  _setupEnvironment() {
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const env = new RoomEnvironment();
    this.scene.environment = pmrem.fromScene(env, 0.04).texture;
    pmrem.dispose();
  }

  _setupLights() {
    const key = new THREE.DirectionalLight(0xffffff, 2.3);
    key.position.set(13, 23, 15);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 90;
    const s = 20;
    key.shadow.camera.left = -s;
    key.shadow.camera.right = s;
    key.shadow.camera.top = s;
    key.shadow.camera.bottom = -s;
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.02;
    key.shadow.radius = 7;
    key.target.position.set(0, 4, 1);
    this.scene.add(key);
    this.scene.add(key.target);

    const fill = new THREE.DirectionalLight(0xffffff, 0.45);
    fill.position.set(-18, 9, 8);
    this.scene.add(fill);

    const hemi = new THREE.HemisphereLight(0xffffff, 0x9a958a, 0.35);
    this.scene.add(hemi);
  }

  // Boden fängt nur den Schatten ab → Produkt „schwebt" auf nahtlosem Hintergrund.
  _setupGround() {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(600, 600),
      new THREE.ShadowMaterial({ opacity: 0.24 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);
  }

  add(obj) {
    this.scene.add(obj);
  }

  resize() {
    const el = this.canvas.parentElement;
    const w = el.clientWidth || 1;
    const h = el.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  _tick() {
    requestAnimationFrame(() => this._tick());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
