import './style.css';
import data from './data/products.json';
import { Configurator } from './configurator/Configurator.js';
import { Panel } from './ui/Panel.js';

const canvas = document.getElementById('scene');
const panelEl = document.getElementById('panel');
const loading = document.getElementById('loading');

const configurator = new Configurator(canvas, data);
new Panel(panelEl, configurator, data);

// Ladehinweis ausblenden, sobald die ersten beiden Frames gerendert sind.
requestAnimationFrame(() => requestAnimationFrame(() => loading?.remove()));
