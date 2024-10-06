/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--ns-primary))',
        success: 'rgb(var(--ns-success))',
        danger: 'rgb(var(--ns-danger))',
        warn: 'rgb(var(--ns-warn))',
        dark: 'rgb(var(--ns-dark))',
        light: 'rgb(var(--ns-light))',
        Content: 'rgb(var(--ns-backgroundContent))',
      },
    },
  },
  plugins: [],
};
