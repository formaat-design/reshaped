const loaderUtils = require("loader-utils");
const withTM = require("next-transpile-modules")(["reshaped"]);

/** @type {import("next").NextConfig} */
const nextConfig = withTM({
  webpack: (config) => {
    const rule = config.module.rules.find((rule) => "oneOf" in rule);

    if (rule && rule.oneOf) {
      rule.oneOf.forEach((loader) => {
        if (!Array.isArray(loader.use)) return;

        loader.use.forEach((item) => {
          if (!item.loader || !item.loader.includes("css-loader")) return;

          // eslint-disable-next-line no-param-reassign
          item.options = {
            ...item.options,
            modules: {
              ...item.options.modules,
              // You can customise the way css modules output classnames in your product using:
              getLocalIdent: (loaderContext, _, localName, options) => {
                return (
                  loaderUtils
                    .interpolateName(
                      loaderContext,
                      `[folder]_[name]__${localName}`,
                      options
                    )
                    // Webpack name interpolation returns `about_about.module__root` for
                    // `.root {}` inside a file named `about/about.module.css`. Let's simplify
                    // this.
                    .replace(/\.module_/, "_")
                    // Replace invalid symbols with underscores instead of escaping
                    // https://mathiasbynens.be/notes/css-escapes#identifiers-strings
                    .replace(/[^a-zA-Z0-9-_]/g, "_")
                    // "they cannot start with a digit, two hyphens, or a hyphen followed by a digit [sic]"
                    // https://www.w3.org/TR/CSS21/syndata.html#characters
                    .replace(/^(\d|--|-\d)/, "__$1")
                );
              },
              mode: "local",
            },
          };
        });
      });
    }

    return config;
  },
});

module.exports = nextConfig;
