/** @type {import('next').NextConfig} */

const postcssConfig = require("arcade/postcss");
const withTM = require("next-transpile-modules")(["arcade"]);
const withCSS = require("arcade-next-css");

module.exports = withTM(
  withCSS({
    cssLoaderOptions: {
      modules: {
        localIdentName: "[name]-[local]-[hash:base64:5]",
      },
    },
    postcssLoaderOptions: {
      postcssOptions: postcssConfig.full,
    },
    pageExtensions: ["ts", "tsx", "js", "jsx"],
  })
);
