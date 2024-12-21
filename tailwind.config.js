/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Make sure index.html is being scanned
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure JS/TS/JSX/TSX files are being scanned
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ["Playwrite NZ", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
      },
      fontSize: {
        "10xl": "10rem",
      },
      keyframes: {
        pulseText: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        pulseText: "pulseText 1.5s ease-in-out infinite",
      },
    },
    plugins: [],
  },
};
