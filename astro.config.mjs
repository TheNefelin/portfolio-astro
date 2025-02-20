// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'; // Importar el adaptador de Vercel

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  output: 'server', // Habilitar SSR
  adapter: vercel(), // Usar el adaptador de Vercel
});
