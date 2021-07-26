const base = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

const server = {
  target: "web",
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
    ],
  },
};

module.exports = merge(base, server);
