const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  inject: false,
  hash: true,
  template: "./src/index.html",
  filename: "./index.html"
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'style.[contenthash].css'
})

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlPlugin, miniCssExtractPlugin]
};
