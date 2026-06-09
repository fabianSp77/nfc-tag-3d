import * as THREE from 'three';
import { loadIconGeometry } from './icons.js';

// Geteilte Bausteine für die flachen Produkttypen (Board, Base, Tile, Snap).

export function plastic(hex, roughness = 0.5) {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(hex),
    roughness,
    metalness: 0,
    envMapIntensity: 0.7,
  });
}

export function metal() {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color('#c7cace'),
    roughness: 0.28,
    metalness: 1.0,
    envMapIntensity: 1.1,
  });
}

function textMesh(text, width, color, single) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = single ? 96 : 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (single) {
    ctx.font = '700 48px "Hanken Grotesk", Arial, sans-serif';
    ctx.fillText(text, 256, 50);
  } else {
    const ls = String(text).trim().split(/\s+/).slice(0, 3);
    const lineH = 256 / (ls.length + 0.5);
    ctx.font = `700 ${Math.min(150, Math.round(lineH * 0.9))}px Georgia, serif`;
    const y0 = 128 - ((ls.length - 1) * lineH) / 2;
    ls.forEach((l, i) => ctx.fillText(l.slice(0, 12), 256, y0 + i * lineH));
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const mat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    roughness: 0.45,
    metalness: 0,
    alphaMap: tex,
    alphaTest: 0.45,
  });
  return new THREE.Mesh(new THREE.PlaneGeometry(width, (width * c.height) / 512), mat);
}

export const embossText = (text, width, color = '#1c1c1c') => textMesh(text, width, color, false);
export const embossLabel = (text, width, color = '#2c2c2c') => textMesh(text, width, color, true);

// Extrudiertes Icon flach (Vorderseite +Z) auf ein Eltern-Mesh setzen.
export async function mountIcon(parent, iconId, material, { size = 1.5, depth = 0.16, z = 0.02 } = {}) {
  try {
    const geo = await loadIconGeometry(iconId, { targetSize: size, depth });
    const m = new THREE.Mesh(geo, material);
    m.position.z = z;
    m.castShadow = true;
    parent.add(m);
    return m;
  } catch (e) {
    console.warn('Icon konnte nicht geladen werden:', iconId, e);
    return null;
  }
}
