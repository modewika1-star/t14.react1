/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          main: '#8b2e8f',
          light: '#9a2d9e',
          bg: '#f5f0fa',
        }
      }
    },
  },
  plugins: [],
}
