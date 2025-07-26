// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // ← change to whatever port you want
    host: '0.0.0.0' // ← optional: makes it accessible from your local network
  }
});