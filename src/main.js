import './style.css';
import data from './data/products.json';
import { Configurator } from './configurator/Configurator.js';
import { Panel } from './ui/Panel.js';

const canvas = document.getElementById('scene');
const panelEl = document.getElementById('panel');
const loading = document.getElementById('loading');

const configurator = new Configurator(canvas, data);

// Produkt aus der URL vorwählen (Deep-Link von der Landingpage), z. B.
// konfigurator.html?produkt=tap-bar-4
const wanted = new URLSearchParams(location.search).get('produkt');
if (wanted && data.products.some((p) => p.id === wanted)) {
  configurator.applyProduct(wanted);
}

new Panel(panelEl, configurator, data);

// Ladehinweis ausblenden, sobald die ersten beiden Frames gerendert sind.
requestAnimationFrame(() => requestAnimationFrame(() => loading?.remove()));
