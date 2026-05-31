/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "10rem",
        },
      },
      colors: {
        main: "#595DE5",
        onecolor: {
          100: "#282A66",
          200: "#A1A4EA",
          300: "#5A5EE6",
          400: "#4649B3",
        },
        shadows: {
          100: "#4144A6",
          200: "#282A66",
          300: "#5E63F2",
          400: "#5054CC",
          500: "#5E63F244",
          600: "#282A66EE",
        },
        forth: {
          100: "#4348E6",
          200: "#E67470",
          300: "#E6C643",
          400: "#4EE682",
        },
        double: {
          100: "#A765E6",
          200: "#E6B770",
          300: "#E1E643",
          400: "#4EA3E6",
        },
        similar: {
          100: "#A452F2",
          200: "#7E56FC",
          300: "#5687FC",
          400: "#52ACF2",
        },
      },
    },
  },
  plugins: [],
};
