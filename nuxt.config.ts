// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500;700&display=swap',
        },
      ],
    },
  },
  css: ['./assets/css/main.css'],
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
    port: 3000, // or any other port you want to use
  },
});
