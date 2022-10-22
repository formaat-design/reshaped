"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
var _exportNames = {
  PageRenderer: true,
  Link: true,
  useScrollRestoration: true,
  withPrefix: true,
  withAssetPrefix: true,
  navigate: true,
  parsePath: true,
  graphql: true,
  prefetchPathname: true,
  StaticQuery: true,
  StaticQueryContext: true,
  useStaticQuery: true,
  StaticQueryServerContext: true
};
exports.StaticQueryServerContext = exports.StaticQueryContext = exports.StaticQuery = exports.PageRenderer = exports.Link = void 0;
exports.graphql = graphql;
exports.withPrefix = exports.withAssetPrefix = exports.useStaticQuery = exports.useScrollRestoration = exports.prefetchPathname = exports.parsePath = exports.navigate = void 0;

var _loader = _interopRequireDefault(require("./loader"));

var _publicPageRenderer = _interopRequireDefault(require("./public-page-renderer"));

exports.PageRenderer = _publicPageRenderer.default;

var _gatsbyReactRouterScroll = require("gatsby-react-router-scroll");

exports.useScrollRestoration = _gatsbyReactRouterScroll.useScrollRestoration;

var _gatsbyLink = _interopRequireWildcard(require("gatsby-link"));

exports.Link = _gatsbyLink.default;
exports.withPrefix = _gatsbyLink.withPrefix;
exports.withAssetPrefix = _gatsbyLink.withAssetPrefix;
exports.navigate = _gatsbyLink.navigate;
exports.parsePath = _gatsbyLink.parsePath;

var _staticQuery = require("./static-query");

exports.StaticQuery = _staticQuery.StaticQuery;
exports.StaticQueryContext = _staticQuery.StaticQueryContext;
exports.useStaticQuery = _staticQuery.useStaticQuery;
exports.StaticQueryServerContext = _staticQuery.StaticQueryServerContext;

var _gatsbyScript = require("gatsby-script");

Object.keys(_gatsbyScript).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _gatsbyScript[key]) return;
  exports[key] = _gatsbyScript[key];
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const prefetchPathname = _loader.default.enqueue;
exports.prefetchPathname = prefetchPathname;

function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}