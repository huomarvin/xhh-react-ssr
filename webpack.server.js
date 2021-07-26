const base = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

const server = {
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.bundle.js",
  },
  // target: "node",
  externalsPresets: { node: true }, // webpack5 替换target:node
  externals: [
    nodeExternals({
      // allowlist: ['ejs']
    }),
  ],
  module: {
    rules: [
    ],
  },
};

module.exports = merge(base, server);
