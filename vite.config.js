// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cesium from 'vite-plugin-cesium'

export default defineConfig({
  plugins: [
    react(),
    cesium()
  ],
  define: {
    // public/cesium altında servis edilmesini söylüyoruz
    CESIUM_BASE_URL: JSON.stringify('/cesium')
  }
})
