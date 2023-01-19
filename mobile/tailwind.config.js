/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090a',
      },
      fontFamily: {
        regular: 'Poppins_400Regular',
        semibold: 'Poppins_600SemiBold',
        bold: 'Poppins_700Bold',
        extrabold: 'Poppins_800ExtraBold'
      }
    },
  },
  plugins: [],
}