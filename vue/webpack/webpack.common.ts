/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */
/* tslint:disable:no-implicit-dependencies object-literal-sort-keys object-literal-key-quotes */

import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import { resolve } from "path";
import { VueLoaderPlugin } from "vue-loader";
import { Configuration } from "webpack";

export default {
  entry: [resolve(__dirname, "..", "src", "main")],
  output: {
    path: resolve(__dirname, "..", "..", "src", "static"),
  },
  resolve: {
    alias: { "@": resolve("src"), src: resolve("src") },
    extensions: [".wasm", ".mjs", ".ts", ".js", ".vue"],
  },
  devtool: "source-map",
  target: "web",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: { loaders: { i18n: "@kazupon/vue-i18n-loader" } },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["url-loader?limit=10000", "img-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
        options: { name: "fonts/[name].[ext]" },
      },
      {
        test: /\.(ts|js)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin(), new FriendlyErrorsWebpackPlugin()],
} as Configuration;
