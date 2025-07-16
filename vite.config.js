import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@elements': path.resolve(__dirname, './elements'),
      '@services': path.resolve(__dirname, './services'),
      '@src': path.resolve(__dirname, './src'),
    },
  },
})
