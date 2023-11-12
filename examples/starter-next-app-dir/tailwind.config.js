const { getTheme } = require("reshaped/config/tailwind");

const theme = getTheme();

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}', 
    './components/**/*.{ts,tsx}',
  ],
  theme,
};
