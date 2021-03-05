const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

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
      title: 'Приложение',
      minify: false,
      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'stories.css'
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {from:'src/images', to:'images'},
        {from:'src/data.json',to: path.resolve(__dirname, 'build')}
      ],
    }),
    new FaviconsWebpackPlugin('./src/images/favicons/favicon.png')
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    overlay: true,
    open: true,
    port: 8080
  },
  mode: 'production',
  performance: {
    // hints: false,
    maxEntrypointSize: 1048576,
    maxAssetSize: 1048576,
  },
};