const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss|sass$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
          loader: 'css-loader',
        },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 1234,
    hot: true,
    open: true,
  },
  stats: 'errors-only',
};
