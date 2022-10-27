/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Broadway': ['Broadway'],
        'Palatino': ['Palatino'],
        'ProductSans': ['ProductSans'],
        'Esteban': ['Esteban'],
        'Monserrat': ['Montserrat'],
        'OpenSans': ['OpenSans'],
        'ProdcutSansBold': ['ProductSansBold']
      },
      colors: {
        'gold': '#FFDF00'
      }
    },
  },
  plugins: [],
}
