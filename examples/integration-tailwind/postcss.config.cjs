const { config } = require("reshaped/config/postcss");

module.exports = {
  plugins: {
    ...config.plugins,
  },
};
