import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Free-Redeem-code/',
  build: {
    outDir: 'dist',
  }
})
