const { getTheme } = require("reshaped/config/tailwind");

const theme = getTheme();

console.log(theme);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme,
};
