/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue-elements': 'hsl(209, 23%, 22%)',
      'dark-very-blue': 'hsl(207, 26%, 17%)',
      'very-dark-blue-font': 'hsl(200, 15%, 8%)',
      'light-dark-gray-input': 'hsl(0, 0%, 52%)',
      'light-gray': 'hsl(0, 0%, 98%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    extend: {},
  },
  plugins: [],
}