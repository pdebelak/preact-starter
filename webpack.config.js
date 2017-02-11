var path = require("path");

module.exports = {
  entry: './src/index.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
		port: process.env.PORT || 5678,
		host: 'localhost',
		publicPath: '/',
		contentBase: './public',
		historyApiFallback: true,
		open: true,
	},
};
