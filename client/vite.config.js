const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  base: './', // <-- ADD THIS
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443,
    },
    allowedHosts: ['alpine-pineapple-verse.glitch.me'],
  },
});
