/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: ["reshaped"],
  future: { unstable_cssModules: true, unstable_cssSideEffectImports: true },
};
