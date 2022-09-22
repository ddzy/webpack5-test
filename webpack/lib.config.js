const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = [
  {
    mode: process.env.APP_ENV,
    entry: {
      index: "./src/index.js",
    },
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "[name].umd.js",
      library: {
        type: "umd",
        umdNamedDefine: true,
      },
      globalObject: "this",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      port: 1234,
      hot: true,
      open: true,
    },
    stats: "errors-only",
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.umd.html",
      }),
      new CleanWebpackPlugin(),
    ],
  },
  {
    mode: process.env.APP_ENV,
    entry: {
      index: "./src/index.js",
    },
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "[name].esm.js",
      library: {
        type: "module",
      },
    },
    experiments: {
      outputModule: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      port: 1234,
      hot: true,
      open: true,
    },
    stats: "errors-only",
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.esm.html",
      }),
      new CleanWebpackPlugin(),
    ],
  },
];
