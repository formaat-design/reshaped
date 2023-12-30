const path = require('path');
const { getConfig } = require("reshaped/config/postcss");

module.exports = getConfig({ 
  themeMediaCSSPath: path.resolve(__dirname, 'src/themes/plain/media.css'),
});
