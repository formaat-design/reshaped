/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["reshaped"],
  experimental: {
    optimizePackageImports: ["reshaped"],
  },
};

module.exports = nextConfig;
