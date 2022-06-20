import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    clearScreen: false,
    server: {
      port: 3000,
      strictPort: true,
    },
    envPrefix: ['VITE_', 'TAURI_'],
    build: {
      target: ['es2021', 'chrome97', 'safari13'],
      minify: !process.env.TAURI_DEBUG && 'esbuild',
      sourcemap: !!process.env.TAURI_DEBUG,
    },
})
