/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["reshaped"],
  // modularizeImports: {
  //   reshaped: {
  //     transform: "reshaped/components/{{member}}",
  //   },
  // },
};

module.exports = nextConfig;
