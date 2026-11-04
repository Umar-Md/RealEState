/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ssp: { green: "#0b5a26", dark: "#063d1a", gold: "#e0b73a", yellow: "#ffe21a", cream: "#f7f8f4" }
      },
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"], display: ["Georgia", "serif"] }
    }
  },
  plugins: []
};
