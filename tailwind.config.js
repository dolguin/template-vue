/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        footer: '#d8d8d8',
        // primary: '#f35958'
        primary: '#d90916',
        dark: '#181818'
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px'
      }
    }
  },
  plugins: []
}
