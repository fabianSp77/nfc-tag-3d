import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

/**
 * Icons: SVG → 3D. Wie beim Vorbild liegen Icons als simple SVGs vor und werden
 * zur Laufzeit zu 3D extrudiert (ExtrudeGeometry). Neues Icon = SVG in
 * src/icons/ ablegen + Eintrag in products.json.
 *
 * Die SVGs werden zur BUILD-Zeit gebündelt (kein Runtime-fetch). Dadurch
 * funktioniert der Konfigurator unter jedem Basis-Pfad, offline und als
 * single-file Build (file://).
 */
const rawSvg = import.meta.glob('../icons/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const svgById = {};
for (const [path, text] of Object.entries(rawSvg)) {
  const id = path.split('/').pop().replace(/\.svg$/, '');
  svgById[id] = text;
}

const loader = new SVGLoader();

/** Inline Data-URI für die Icon-Vorschau im Panel (self-contained). */
export function iconDataUri(id) {
  const svg = svgById[id];
  return svg ? 'data:image/svg+xml,' + encodeURIComponent(svg) : '';
}

/**
 * Liefert eine FRISCHE extrudierte Geometrie (kein Cache): jede Kachel besitzt
 * ihre eigene Geometrie, damit das Entsorgen einer Kachel keine andere trifft.
 * Bleibt async (Promise) für kompatible Aufrufer.
 */
export function loadIconGeometry(id, { targetSize = 1.7, depth = 0.16 } = {}) {
  const text = svgById[id];
  if (!text) return Promise.reject(new Error(`Icon "${id}" nicht gefunden`));
  return Promise.resolve(buildGeometry(text, targetSize, depth));
}

function buildGeometry(svgText, targetSize, depth) {
  const data = loader.parse(svgText);

  const shapes = [];
  for (const path of data.paths) {
    // createShapes respektiert fill-rule (evenodd → Löcher in der Form).
    for (const shape of SVGLoader.createShapes(path)) shapes.push(shape);
  }
  if (shapes.length === 0) throw new Error('SVG enthält keine Flächen');

  const geo = new THREE.ExtrudeGeometry(shapes, {
    depth,
    bevelEnabled: true,
    bevelThickness: depth * 0.4,
    bevelSize: depth * 0.28,
    bevelSegments: 2,
    curveSegments: 14,
  });

  // SVG-Y zeigt nach unten → spiegeln, dann normieren und zentrieren.
  geo.scale(1, -1, 1);
  geo.computeBoundingBox();
  let bb = geo.boundingBox;
  const scale = targetSize / Math.max(bb.max.x - bb.min.x, bb.max.y - bb.min.y);
  geo.scale(scale, scale, 1);

  geo.computeBoundingBox();
  bb = geo.boundingBox;
  geo.translate(-(bb.max.x + bb.min.x) / 2, -(bb.max.y + bb.min.y) / 2, 0);
  geo.computeVertexNormals();
  return geo;
}
