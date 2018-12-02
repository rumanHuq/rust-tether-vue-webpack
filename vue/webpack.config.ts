/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */

import merge from "webpack-merge";
import common from "./webpack/webpack.common";

const NODE_ENV = process.env.NODE_ENV === "development" ? "dev" : "prod";
export default () =>
  merge.strategy({
    entry: "prepend",
    "module.loaders": "prepend",
  })(common, require(`./webpack/webpack.${NODE_ENV}.ts`).default);
