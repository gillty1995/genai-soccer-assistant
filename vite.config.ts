import { defineConfig } from 'vite'; // Correct Vite import
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5177,  // Custom port
  },
});