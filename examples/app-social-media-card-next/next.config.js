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
              // getLocalIdent: () => {}
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
