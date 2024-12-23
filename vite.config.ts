import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5177,  // Custom port
  },
  build: {
    outDir: 'dist',       
    assetsDir: 'assets',  
    rollupOptions: {
      input: 'index.html',
    },
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg'],
});