import './path'
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	devServer: {
		static: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader','css-loader'],
			},
		],
	},
};
