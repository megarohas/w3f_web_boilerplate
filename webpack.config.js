const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: ["./frontend/client.ts"],
  },
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
    filename: "app.js",
  },
  devServer: {
    port: 9001,
    static: "./frontend",
    hot: true,
    historyApiFallback: true,
    // proxy: [
    //   {
    //     // path: "/*",
    //     // target: "http://localhost:9000",
    //   },
    // ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
