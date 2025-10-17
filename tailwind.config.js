/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5F4F2', // Keep light background
        accent: '#D4A574', // Gold/amber from logo
        gold: '#C9A961', // Richer gold
        'gold-light': '#E5D5B7', // Light gold
        'k-black': '#1a1a1a', // True black from logo
        dark: '#2d2d2d',
        body: '#4F4844',
        'k-gray': '#EDEBE8',
        'k-border': '#D2CFCC',
        white: '#FFFFFF',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Source Serif 4"', 'serif'],
      },
      spacing: {
        'medium': '9em',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}