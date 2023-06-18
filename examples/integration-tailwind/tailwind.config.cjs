const { getTheme } = require("reshaped/config/tailwind");

const theme = getTheme();

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme,
};
