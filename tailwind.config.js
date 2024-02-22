export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 

  darkMode: 'class',
  
  theme: {
    extend: {

      fontFamily: {
        sans: 'Inter, sans-serif',
      },

      colors: {
        'my-black': {
          900: '#0D0F11',
          800: '#171A1D',
          500: '#575757',
          400: '#B9B9B9',
          300: '#E4E4E4'
        },

        'my-blue': {
          900: '#5A86FF',
          500: '#CFECFF',
        },

        'my-red': {
          900: '#ff5a5a',
        },

        'my-green': {
          900: '#00ac45',
        },

        'my-yellow': {
          900: '#ffc400',
        }
      }
    },
  },
  plugins: [],
}