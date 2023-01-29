/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["OpenSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
