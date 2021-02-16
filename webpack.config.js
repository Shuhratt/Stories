const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: 'src/index.html',
      minify: false
    }),
    new MiniCssExtractPlugin({
      filename: 'stories.css'
    })
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