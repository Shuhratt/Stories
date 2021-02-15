
//
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //разделить js код от css кода.
// // const devMode = process.env.NODE_ENV !== 'production';
//
// module.exports = {
//   entry: './src/js/index.js',npm star
//   module: {
//     rules: [ // правила
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           "style-loader", // Внедрить CSS в DOM
//           MiniCssExtractPlugin.loader,
//           'css-loader', // интерпретируют @import url()как import/require()
//           {
//             loader: 'postcss-loader',
//             options: { sourceMap: true,   postcssOptions: { config: path.resolve(__dirname, "src/js/postcss.config.js"),}}
//           },npm
//           // {
//           //   loader: "css-loader",
//           //   options: {
//           //     sourceMap: true,
//           //   },
//           // },
//           {
//             loader: "sass-loader",
//             options: {
//               sourceMap: true,
//             },
//           },
//         ]
//       },
//
//
//       // { test: /\.(js)$/, use: 'babel-loader' }
//       // { test: /\.svg$/, use: 'svg-inline-loader' }, //Первая — тип обрабатываемых файлов. Вторая — лоадер, используемый для обработки данного типа файлов.
//       // { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }, // Вебпак в [] будет применять их в обратном порядке
//     ]
//   },
//   output: { // Точка выхода
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'index_bundle.js'
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       inject: true,
//       filename: 'index.html',
//       template: 'src/index.html',
//       chunks: ['main']
//     }),
//     new MiniCssExtractPlugin({
//       // Параметры, аналогичные тем же параметрам в webpack.Options.output
//       filename: 'css/[name].css?[hash]',
//       chunkFilename: '[id].scss',
//     }),
//   ],
//   mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
//   devServer: {
//     contentBase: path.resolve(__dirname, 'dist'),
//     compress: true,
//     overlay: true,
//     open: true,
//     port: 9000
//   }
// }


/*
https://habr.com/ru/post/514838/

Благодаря -loader мы можем импортировать файлы

npm i svg-inline-loader -D
npm i css-loader -D
npm i style-loader -D  поместить стили в тег <style>
npm install -D babel-loader @babel/core @babel/preset-env webpack


npm i html-webpack-plugin -D для генерации html
npm i webpack-dev-server -D для сервера
npm install sass-loader sass webpack --save-dev для компиляции scss
npm install --save-dev extract-text-webpack-plugin для стилей


npm install style-loader sass-loader node-sass --save-dev
npm install postcss-loader autoprefixer css-mqpacker cssnano --save-dev


 */