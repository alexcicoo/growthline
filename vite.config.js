import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/growthline/', // TÄHÄN: Sinun GitHub-repositoriosi nimi vinoviivojen sisään
})