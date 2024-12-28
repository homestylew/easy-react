const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: path.join(__dirname, "/src/index.tsx"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "static/js/[name].js",
    clean: true,
    publicPath: "/",
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "/public"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', "postcss-loader"]
      },
      {
        test: /.(ts|tsx|js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          }
        },
        generator: {
          filename: 'static/images/[name][ext]',
        },
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
      inject: true,
    }),
  ],
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },
  stats: "errors-only",
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
};
