import { defineConfig } from 'vite';

// Relative base damit der Build sowohl auf Vercel als auch in beliebigen
// Unterverzeichnissen / Shopify-Embeds ausgeliefert werden kann.
export default defineConfig({
  base: './',
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1500, // three.js ist groß – das ist erwartet
  },
});
