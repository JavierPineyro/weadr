import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Asi se agregan aliases a Vite
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@components': path.join(__dirname, 'src/components'),
      '@pages': path.join(__dirname, 'src/pages')
    }
  }
})
