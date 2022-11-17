const HtmlWebpackPlugin = require("html-webpack-plugin"); // first import ...

module.exports = {
  module: {
    rules: [
	{
		test: /\.js$/,
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
	}]
  },
  devtool: "source-map",
  // target: 'web', 			//added from stackOverflow
  plugins: [
    new HtmlWebpackPlugin() // ... then register it
  ]
};
