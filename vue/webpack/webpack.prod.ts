/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */
/* tslint:disable:no-implicit-dependencies object-literal-sort-keys */

import CompressionPlugin from "compression-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin, Configuration } from "webpack-bundle-analyzer";

const plugins = [
  new CompressionPlugin({
    cache: true,
    minRatio: 0.75,
  }),
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
  }),
];
if (process.env.SHOW_BUNDLE !== undefined) {
  plugins.push(new BundleAnalyzerPlugin());
}
export default {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { url: true, sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: { plugins: [require("autoprefixer"), require("cssnano")] },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "url-loader?limit=10000",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: { quality: 65 },
              pngquant: {
                quality: "10-20",
                speed: 4,
              },
              svgo: {
                plugins: [
                  { removeViewBox: false },
                  { removeEmptyAttrs: false },
                ],
              },
              gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins,
} as Configuration;
