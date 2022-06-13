const
  path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mashtaler.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin(),
    ],
  },
}