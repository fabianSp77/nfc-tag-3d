import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// SINGLEFILE=1 npm run build → eine self-contained HTML (nur Konfigurator) in
// dist-single/. Normaler Build = Multi-Page (Landing + Konfigurator) in dist/.
const single = process.env.SINGLEFILE === '1';

export default defineConfig({
  base: './',
  plugins: single ? [viteSingleFile()] : [],
  build: {
    target: 'esnext',
    outDir: single ? 'dist-single' : 'dist',
    chunkSizeWarningLimit: 1500, // three.js ist groß – das ist erwartet
    rollupOptions: single
      ? { input: 'konfigurator.html' }
      : { input: { main: 'index.html', konfigurator: 'konfigurator.html' } },
  },
});
