const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/stories.js',
  output: {
    filename: 'stories.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: 'src/index.html',
      minify: false
    }),
    new MiniCssExtractPlugin({
      filename: 'stories.css'
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {from:'src/images',to:'images'},
        {from:'src/data.json',to: path.resolve(__dirname, 'build')}
      ],
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    overlay: true,
    open: true,
    port: 8080
  },
  mode: 'production'
};