/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class',
  theme: {
    fontFamily: {
      body: ['Josefin Sans'],
      cardo: ['Cardo']
    },
    extend: {
      colors: {
        'rhombus-green': { DEFAULT: '#24D5D6', dark: '#00A1A7' }
      },
      backgroundImage: {
        'site': "url('/src/assets/fondo.jpg')"        
      },
    },

  },
  plugins: [],
}
