/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
        print: {'raw' : 'print'},
        screen: {'raw' : 'screen'},
      },
      width: {'etq': '185px'},
      height: {'etq': '110px'}
    },
  },
  plugins: [],
}

