const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")

module.exports = {

	entry: "./src/js/stories.js",
	output: {
		filename: "stories.js",
		path: path.resolve(__dirname, "build"),
		publicPath: "./",
	},
	stats: {
		children: true
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
          "postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.svg$/,
				loader: "svg-inline-loader"
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts/"
						}
					}
				]
			}
		],

	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "src/index.html"),
			hash: true,
		}),
		new MiniCssExtractPlugin({
			filename: "stories.css"
		}),
		new CopyPlugin({
			patterns: [
				{from:"src/images", to:"images"},
				// {from:'src/fonts',to: path.resolve(__dirname, 'build/fonts')}
			],
		}),
		new FaviconsWebpackPlugin({
      logo: './src/images/favicons/fav_dark.svg',
      prefix: 'images/'
    })
	],
	devServer: {
		contentBase: path.resolve(__dirname, "build"),
		compress: true,
		overlay: true,
		open: true,
		port: 8080,
    hot: true,
	},
	mode: "production",
	performance: {
		maxEntrypointSize: 1048576,
		maxAssetSize: 1048576,
	},
}