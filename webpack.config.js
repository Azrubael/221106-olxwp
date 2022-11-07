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
		use: 'file-loader'
	}
    ]
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin() // ... then register it
  ]
};
