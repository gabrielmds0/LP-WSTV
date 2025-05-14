import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/workshop-v/',
  plugins: [tailwindcss(),react()],
  build: {
    // Isso muda o diretório de output dos assets para 'assets' em vez de 'src/assets'
    assetsDir: 'assets',
    // Essa configuração não gera o diretório 'src'
    outDir: 'dist'
  }

})
