const { generateThemeColors } = require("reshaped/themes");

// @ts-check
/** @type {import('reshaped').ReshapedConfig} */
const config = {
  themes: {
    plain: {
      color: generateThemeColors({ primary: "#e6c961" }),
      viewport: {
        m: { minPx: 630 }
      }
    },
  },
};

module.exports = config;
