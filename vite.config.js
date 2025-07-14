import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@services': path.resolve(__dirname, './services'),
      '@elements': path.resolve(__dirname, './elements'),
      '@games': path.resolve(__dirname, './src/games'),
    },
  }
})
