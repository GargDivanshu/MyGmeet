/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black: "#121212",
        lightblack: "#1d1d1d",
        "twitterBlue": "#1da1f2",
      }
    },
  },
  plugins: [],
}