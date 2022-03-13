// const postcss = require("arcade/postcss");

const postcss = require("reshaped/postcss");

module.exports = {
  modules: true,
  ...postcss.config,
};
