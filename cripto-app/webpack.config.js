const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.tsx',
  mode: process.env.NODE_ENV || 'development',
  devServer: {
	port: 3002,
	historyApiFallback: true
  },
  output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'auto'
	},
  resolve: {
	extensions: ['.tsx', '.ts', '.js']
  },
  module: {
	rules: [
	  {
		test: /\.tsx?$/,
		loader: 'ts-loader',
		exclude: /node_modules/
	  }
	  ,
	  {
		test: /\.css$/,
		use: ['style-loader', 'css-loader']
	  }
	]
  },
  plugins: [
	new ModuleFederationPlugin({
	  name: 'criptoApp',
	  filename: 'remoteEntry.js',
	  exposes: {
		'./App': './src/App'
	  },
	  shared: {
		react: { singleton: true, requiredVersion: '^18.2.0' },
		'react-dom': { singleton: true, requiredVersion: '^18.2.0' }
	  }
	}),
	new HtmlWebpackPlugin({
	  template: './public/index.html'
	})
  ]
};
