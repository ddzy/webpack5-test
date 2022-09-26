const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");

const baseConfig = {
  mode: process.env.APP_ENV,
  entry: {
    index: "./src/index.js",
  },
  module: {
    // rules: [
    //   {
    //     test: /.test$/,
    //     use: [
    //       {
    //         loader: path.resolve(__dirname, '../loader/test-loader.js'),
    //       },
    //     ],
    //   },
    // ],
  },
  // inline-loader
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "../loader")],
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  stats: "errors-only",
  devtool: 'source-map',
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
