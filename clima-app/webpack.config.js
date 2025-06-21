const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    port: 3001,
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
		test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
	  }
	  ,
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'climaApp',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
	  new CopyWebpackPlugin({
    patterns: [{ from: "public", to: "public" }],
  }),
  ]
};
