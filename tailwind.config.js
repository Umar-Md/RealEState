/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "border-glint": {
          to: { strokeDashoffset: "-100" },
        },
        "cta-reveal": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "border-glint": "border-glint 1.5s linear infinite",
        "cta-reveal": "cta-reveal 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      colors: {
        ssp: { green: "#163D32", dark: "#163D32", gold: "#C6A15B", cream: "#F8F6EF", charcoal: "#2B2B2D" }
      },
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"], display: ["Georgia", "serif"] }
    }
  },
  plugins: []
};
