import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5177,  // Custom port
  },
  build: {
    outDir: 'dist',       // Specify the output directory (defaults to 'dist')
    assetsDir: 'assets',  // Set the directory for assets (images, fonts, etc.)
    rollupOptions: {
      input: 'index.html', // Make sure the correct entry file is used
    },
  },
});