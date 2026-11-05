/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ssp: { green: "#163D32", dark: "#163D32", gold: "#C6A15B", cream: "#F8F6EF", charcoal: "#2B2B2D" }
      },
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"], display: ["Georgia", "serif"] }
    }
  },
  plugins: []
};
