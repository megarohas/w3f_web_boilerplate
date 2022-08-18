const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./frontend/index.js"],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    // alias: {
    //   "react-dom": "@hot-loader/react-dom",
    // },
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },
    port: 9001,
    devMiddleware: {
      publicPath: "https://localhost:9000/dist/",
    },
    hot: "only",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
