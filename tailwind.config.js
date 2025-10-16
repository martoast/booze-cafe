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
        primary: '#F5F4F2',
        accent: '#EE8542',
        'k-black': '#393330',
        dark: '#4F4844',
        body: '#4F4844',
        'k-gray': '#EDEBE8',
        'k-border': '#D2CFCC',
        wine: '#722F37', // Deep wine red
        'wine-light': '#9B4B53', // Lighter wine shade
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