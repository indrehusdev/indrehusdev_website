/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/img/wave.svg')",
        'profile': "url('../public/img/me.PNG')",
      },
      boxShadow:{
        'card1': "20px 20px rgba(0,0,0,.25)",
        'card2': "10px 10px rgba(0,0,0,.55)",
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
      }
    },
    colors: {
      'sec': '#fbf5ec',
      'main': '#e77249',
      'mainSH': '#b4806c',
      'secSh': '#818f8f',
      'green': '#13ce66',
      'white': 'rgb(255 255 255)',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },

    fontFamily: {
      'merri': ['Roboto', 'sans-bold'],
      'code': ['Fira Code', 'sans'],
    },
  },
  plugins: [],
}