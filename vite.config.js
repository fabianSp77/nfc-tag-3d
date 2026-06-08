import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// SINGLEFILE=1 npm run build  →  eine self-contained HTML in dist-single/
// (alles inline: JS, CSS, Icons). Zum lokalen Öffnen per Doppelklick (file://)
// oder Hochladen bei beliebigem Hoster. Normaler Build bleibt unter dist/.
const single = process.env.SINGLEFILE === '1';

export default defineConfig({
  base: './',
  plugins: single ? [viteSingleFile()] : [],
  build: {
    target: 'esnext',
    outDir: single ? 'dist-single' : 'dist',
    chunkSizeWarningLimit: 1500, // three.js ist groß – das ist erwartet
  },
});
