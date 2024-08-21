/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
      transitionProperty: {
        aspect: "aspect-ratio",
      },
    },
  },
  plugins: [],
};
