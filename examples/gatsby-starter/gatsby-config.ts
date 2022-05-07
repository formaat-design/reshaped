import type { GatsbyConfig } from "gatsby";
import postcss from "reshaped/postcss";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-starter`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: postcss.config.plugins,
      },
    },
  ],
};

export default config;
