/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vtOrange: "E5751F"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

