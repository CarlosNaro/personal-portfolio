/** @type {import('tailwindcss').Config} */
export default {
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
        primarySoft: 'rgb(var(--ns-primary-soft))',
        success: 'rgb(var(--ns-success))',
        danger: 'rgb(var(--ns-danger))',
        warn: 'rgb(var(--ns-warn))',
        dark: 'rgb(var(--ns-dark))',
        light: 'rgb(var(--ns-light))',
        Content: 'rgb(var(--ns-backgroundContent))',
        muted: 'rgb(var(--ns-muted))',
        line: 'rgb(var(--ns-line))',
        lineStrong: 'rgb(var(--ns-line-strong))',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
