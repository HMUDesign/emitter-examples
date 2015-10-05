'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Config
 * Reference: http://webpack.github.io/docs/configuration.html
 * This is the object where all configuration gets set
 */
var config = module.exports = {};

/**
 * Devtool
 * Reference: http://webpack.github.io/docs/configuration.html#devtool
 * Type of sourcemap to use per build type
 */
config.devtool = 'eval';

/**
 * Entry
 * Reference: http://webpack.github.io/docs/configuration.html#entry
 */
config.entry = {
	app: './src/bootstrap.js',
};

/**
 * Output
 * Reference: http://webpack.github.io/docs/configuration.html#output
 */
config.output = {
	// Absolute output directory
	path: __dirname + '/build',
	
	// Output path from the view of the page
	publicPath: '',
	
	// Filename for entry points
	filename: '[name].bundle.js',
	
	// Filename for non-entry points
	chunkFilename: '[name].bundle.js',
};

/**
 * Resolve
 * Reference: http://webpack.github.io/docs/configuration.html#resolve-modulesdirectories
 * An array of directory names to be resolved to the current directory as well as its ancestors, and searched for modules.
 */
config.resolve = {
	extensions: [ '', '.js', '.jsx' ],
	modulesDirectories: [ 'node_modules' ],
};

/**
 * Loaders
 * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
 * List: http://webpack.github.io/docs/list-of-loaders.html
 * This handles most of the magic responsible for converting modules
 */
config.module = {
	preLoaders: [],
	loaders: [
		{
			// ES6 JS LOADER
			// Reference: https://github.com/babel/babel-loader
			// Transpile .js files using babel-loader
			// Compiles ES6 and ES7 into ES5 code
			test: /\.jsx$/,
			loader: 'babel?optional[]=runtime',
		},
		{
			// ES6 JS LOADER
			// Reference: https://github.com/babel/babel-loader
			// Transpile .js files using babel-loader
			// Compiles ES6 and ES7 into ES5 code
			test: /\.js$/,
			loader: 'babel?optional[]=runtime',
			exclude: /(node_modules)/,
		},
	],
};

/**
 * Plugins
 * Reference: http://webpack.github.io/docs/configuration.html#plugins
 * List: http://webpack.github.io/docs/list-of-plugins.html
 */
config.plugins = [
	// Reference: https://github.com/ampedandwired/html-webpack-plugin
	// Render index.html
	new HtmlWebpackPlugin({
		template: './src/index.html',
		inject: 'body',
	}),
];

/**
 * Dev server configuration
 * Reference: http://webpack.github.io/docs/configuration.html#devserver
 * Reference: http://webpack.github.io/docs/webpack-dev-server.html
 */
config.devServer = {
	contentBase: './public',
	stats: {
		modules: false,
		cached: false,
		colors: true,
		chunk: false,
	},
};
