const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./frontend/client.ts"],
  mode: "development",
  devtool: "eval-source-map",
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
  devServer: {
    // static: {
    //   directory: path.join(__dirname, "dist/"),
    // },
    // port: 9001,
    // devMiddleware: {
    //   publicPath: "/bundle.js",
    //   // publicPath: "https://localhost:9000/dist/",
    // },
    port: 9001,
    static: "./frontend",
    hot: true,
    proxy: [
      {
        // path: "/*",
        // target: "http://localhost:9000",
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
