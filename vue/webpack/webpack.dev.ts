/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */
/* tslint:disable:no-implicit-dependencies object-literal-sort-keys */

import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { resolve } from "path";
import StyleLintPlugin from "stylelint-webpack-plugin";
import { Configuration } from "webpack";

export default {
  watch: true,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                // Put postcss plugins
              ],
            },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        loader: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                // Put postcss plugins
              ],
            },
          },
          "sass-loader",
        ],
      },
      {
        enforce: "pre",
        test: /\.(js|ts)$/,
        include: resolve("app"),
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      vue: true,
      tslint: true,
    }),
    new StyleLintPlugin({
      configFile: "./.vuestylelintrc",
      files: ["src/**/*.vue"],
    }),
    new StyleLintPlugin({
      configFile: "./.stylelintrc",
      files: ["src/**/*.sass", "src/**/*.scss"],
    }),
  ],
} as Configuration;
