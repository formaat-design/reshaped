const config = require("reshaped/config/postcss");

module.exports = {
  plugins: {
    ...config.default.plugins,
    tailwindcss: {},
    autoprefixer: {},
  },
};
