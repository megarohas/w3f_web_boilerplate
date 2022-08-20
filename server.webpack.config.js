const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./backend/ssr_client.ts"],
  mode: "development",
  devtool: "eval-source-map",
  target: "node",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    // alias: {
    //   "react-dom": "@hot-loader/react-dom",
    // },
  },
  output: {
    path: path.join(__dirname, "dist"),
    // publicPath: "/dist/",
    filename: "bundle.js",
  },
};
