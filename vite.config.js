import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Base public path for GitHub Pages deployment
  base: '/CapibaraConejo/',
  plugins: [react()],
  // Proxy API requests in development to the backend server
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
