// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    // Estilos de Swiper (primero)
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination', // Opcional, si usas paginación
    'swiper/css/effect-fade', // Opcional, si usas efectos
    //:::
    './assets/css/main.css',
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-nesting': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
    '@components': fileURLToPath(new URL('./components', import.meta.url)),
    '@pages': fileURLToPath(new URL('./pages', import.meta.url)),
  },
  router: {
    baseURL: '/personal-portfolio/',
  },
  devServer: {
    host: ' 192.168.35.241',
    port: 3000, // or any other port you want to use
  },
});
