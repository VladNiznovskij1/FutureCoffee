import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Задаем базовый путь сборки под твой репозиторий GitHub
  base: '/FutureCoffee/',
})
