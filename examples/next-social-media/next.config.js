/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["arcade"]);
const withCSS = require("@zeit/next-css");

module.exports = withTM(
  withCSS({
    webpack5: false,
    reactStrictMode: true,
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[name]-[local]-[hash:base64:5]",
    },
  })
);
