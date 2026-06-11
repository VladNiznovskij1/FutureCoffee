import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Настройка путей сборки для корректного отображения на GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/FutureCoffee/',
})
