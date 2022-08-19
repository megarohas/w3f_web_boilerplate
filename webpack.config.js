const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./frontend/index.ts"],
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
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
