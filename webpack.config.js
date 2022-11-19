// first import
const HtmlWebpackPlugin = require("html-webpack-plugin");
// styles minimizator
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");
// сообщаем React какой из режимов и в какой конфигурации мы хотим использовать
const { DefinePlugin } = require("webpack")

module.exports = (env = {}, argv = {}) => ({
  module: {
    rules: [
	{
		test: /\.jsx?$/,
		use: "babel-loader"
	},
	{
		test: /\.(gif|png|jpe?g|svg)$/i,
		use: [
			'file-loader',
			{
				loader: 'image-webpack-loader',
				options: {
					disable: false,
				},
			},
		]
	},
	{
		test: /\.(ogg|mp3|wav|mpe?g)$/i,
		use: 'file-loader'
	},
	{
		test: /\.scss$/,
		// use: ['style-loader', 'css-loader', 'sass-loader']
		use: [
			argv.mode === "production"
			? MiniCssExtractPlugin.loader
			: "style-loader",
			{
				loader: "css-loader", options: {
					sourceMap: true
				}
			},
			{
				loader: "sass-loader", options: {
					sourceMap: true
				}
			}
		]
	}]
  },
  devtool: "source-map",
  // target: 'web', 			//added from stackOverflow
  plugins: [
	// Any option given to Webpack client can be captured on the "argv"
    /* 	Эта пропись нужна для того, чтобы выключить генерацию index.html,
	   	если это уже не нужно для режима "production"
		argv.mode === "development" ? new HtmlWebpackPlugin() : null,
		*/
	new HtmlWebpackPlugin(),
	// конфигурация NODE_ENV для выбора режима React
	new DefinePlugin({
		"process.env": {
			NODE_ENV: JSON.stringify(argv.mode)
		}
	}),
	argv.mode === "production"
		? new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
			})
		: null,
	env.analyze ? new BundleAnalyzerPlugin() : null
  ].filter(
	// To remove any possibility of "null" values inside the plugins array, we filter it
	plugin => plugin !== null
  ),
  resolve: {
	extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"]
  },
  optimization: {
	splitChunks: {
		cacheGroups: {
			commons: {
				test: /[\\/]node_modules[\\/]/,
				name: 'vendors',
				chunks: 'all'
			}
		}
	}
  }
});
