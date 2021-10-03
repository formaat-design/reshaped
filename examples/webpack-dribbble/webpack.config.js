/**
 * Comment out everything MiniCssExtractPlugin related for a prod css example
 */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[hash].js",
  },
  devtool: false,
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".ts", ".tsx", ".js", ".css"],
  },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          // "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.ts(x?)$/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "src/public", to: "public" }],
    }),
    new HtmlWebpackPlugin({
      title: "Arcade Dribbble Demo",
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    compress: true,
    hot: true,
    port: 4000,
  },
};
