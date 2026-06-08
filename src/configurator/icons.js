import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

/**
 * SVG → 3D. Der Signatur-Trick des Vorbilds (Briefing §2.3):
 * Icons liegen als simple SVG-Dateien vor und werden live zu 3D extrudiert.
 * Neues Icon = einfach eine SVG in /public/icons/ ablegen.
 */
const loader = new SVGLoader();
const cache = new Map();

export function loadIconGeometry(id, { targetSize = 1.7, depth = 0.16 } = {}) {
  const key = `${id}:${targetSize}:${depth}`;
  if (cache.has(key)) return cache.get(key);

  const promise = fetch(`${import.meta.env.BASE_URL}icons/${id}.svg`)
    .then((res) => {
      if (!res.ok) throw new Error(`Icon "${id}" nicht gefunden`);
      return res.text();
    })
    .then((text) => buildGeometry(text, targetSize, depth));

  cache.set(key, promise);
  return promise;
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
