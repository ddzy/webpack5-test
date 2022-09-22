const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");

const baseConfig = {
  mode: process.env.APP_ENV,
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  stats: "errors-only",
};

module.exports = [
  merge(baseConfig, {
    output: {
      filename: "[name].umd.js",
      library: {
        type: "umd",
        umdNamedDefine: true,
      },
      globalObject: "this",
    },
  }),
  merge(baseConfig, {
    output: {
      filename: "[name].esm.js",
      library: {
        type: "module",
      },
    },
    experiments: {
      outputModule: true,
    },
  }),
];