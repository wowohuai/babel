const path = require("path");

module.exports = {
  mode: "none",
  entry: "./index.js",
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
                  targets: "> 0.25%, not dead",
                },
              ],
            ],
            plugins: [["@babel/plugin-transform-runtime"]],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: "chunk-vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: "initial",
          reuseExistingChunk: true,
        },
      },
    },
  },
};
