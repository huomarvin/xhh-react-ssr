const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: "3",
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              esModule: false,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@store": path.resolve(__dirname, "src/shared/store"),
      "@pages": path.resolve(__dirname, "src/shared/pages"),
      "@http": path.resolve(__dirname, "src/shared/http"),
      "@hooks": path.resolve(__dirname, "src/shared/hooks"),
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
