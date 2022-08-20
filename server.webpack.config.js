const path = require("path");
const webpack = require("webpack");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: {
    app: ["./backend/ssr_client.ts"],
  },
  mode: "development",
  devtool: "eval-source-map",
  // target: "node",
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
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].js",
  },
  optimization: {
    removeAvailableModules: true,
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        chunks: "all",
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [new WebpackManifestPlugin()],
};
