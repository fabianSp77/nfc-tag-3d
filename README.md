# NFC-Tag 3D-Konfigurator

Deutschsprachiger **3D-Produktkonfigurator** für NFC-Tap-Produkte (Aufsteller mit
NFC-Kacheln). Kunden drehen das Produkt im Browser, färben einzelne Bauteile ein,
belegen Kacheln mit Icons + Links und gestalten das Logo — alles live in 3D.

Vorbild: [allin-studio.com](https://allin-studio.com/tapbar-2-order) — komplett mit
[three.js](https://threejs.org) selbst nachgebaut (kein Zakeke/Threekit/Spline).

![Tech](https://img.shields.io/badge/three.js-r160-black) ![Build](https://img.shields.io/badge/Vite-5-646cff)

---

## Schnellstart

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # Produktions-Build nach dist/
npm run preview    # gebauten Stand lokal prüfen
```

## Was der Konfigurator kann

- **Drehen / Zoomen** per Maus & Touch (OrbitControls, sanftes Damping, Auto-Rotation
  bis zur ersten Interaktion).
- **Bauteil anklicken → einfärben.** Ein Raycaster erkennt Korpus, Rahmen, Kacheln,
  Icons und Logo. Auswahl im 3D-Modell und im Panel sind synchron.
- **Farbpalette + freies Hex-Feld + nativer Color-Picker**, inkl. **CMYK-Vorschau**
  für den Druck.
- **Icons pro Kachel** aus einem Set – als echte **3D-extrudierte SVGs**.
- **Logo** als Text oder eigenes Bild auf der Rückwand.
- **Produktvarianten** (Tap Bar 2 / 3 / 4) mit unterschiedlicher Kachelzahl.
- **„Konfiguration kopieren"** exportiert den Zustand als JSON – die Basis für die
  spätere Warenkorb-Anbindung.

## Der „teure" Look

Drei Hebel sorgen für die hochwertige Optik (three.js):

1. **RoomEnvironment** → realistische PBR-Reflexionen
2. **PCFSoftShadowMap** → weiche Schatten auf nahtlosem Studio-Hintergrund
3. **ACESFilmicToneMapping** → filmische Tonwerte

## Icons hinzufügen (der allin-Trick)

Icons sind keine fertigen 3D-Modelle, sondern simple **SVG-Dateien**, die zur
Laufzeit zu 3D **extrudiert** werden (`ExtrudeGeometry`). Neues Icon hinzufügen:

1. SVG als **gefüllte Form** (Pfade, bei Löchern `fill-rule="evenodd"`) nach
   `public/icons/<name>.svg` legen.
2. Eintrag in `src/data/products.json` unter `icons` ergänzen.

Fertig – kein 3D-Tool nötig.

## Projektstruktur

```
nfc-tag-3d/
├── index.html                  # Einstieg (Bühne + Panel)
├── public/icons/*.svg          # Icon-Bibliothek (SVG → 3D)
├── src/
│   ├── main.js                 # Bootstrap
│   ├── style.css               # UI-Styling (deutsche Oberfläche)
│   ├── data/products.json      # Produkte, Farben, Bauteile, Icons (pflegbar)
│   ├── configurator/
│   │   ├── Scene.js            # Renderer, Licht, Umgebung, Kamera, Controls
│   │   ├── TapBarModel.js      # prozedurale Geometrie des Aufstellers
│   │   ├── icons.js            # SVG → ExtrudeGeometry
│   │   └── Configurator.js     # Zustand + Raycaster-Auswahl
│   └── ui/
│       └── Panel.js            # Konfigurations-Panel (Vanilla-DOM)
└── vite.config.js
```

Alle Produkt-, Farb- und Icon-Daten liegen in `src/data/products.json` und lassen
sich ohne Code-Änderung pflegen.

## Deploy auf Vercel

Vercel erkennt Vite automatisch (Build `npm run build`, Output `dist`). Repo
verbinden → fertige Test-URL zum Teilen. Wie beim Vorbild.

## Roadmap

- [ ] Logo verschieben / skalieren + Maskierung auf die Logo-Fläche
- [ ] Weitere Produkte (Tap Bar Max, Tap Tile, QR-Hybrid)
- [ ] Vorgebackene Fertigungs-Geometrie (`.tilegeo.json`) statt Live-Extrude
- [ ] Shop-Anbindung: Konfiguration → Warenkorb (Shopify *Line Item Properties*
      oder Stripe/Mollie für Deutschland)
- [ ] Rechtstexte DE (Impressum, AGB, Widerruf, DSGVO)

---

Details zur Analyse des Vorbilds und zu den Entscheidungen stehen im
Projekt-Briefing.
