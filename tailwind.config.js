/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5CE1E6',
          hover: '#4BC8CD',
          dark: '#3EADB2',
          light: '#7BE7EB'
        }
      }
    },
  },
  plugins: [],
};