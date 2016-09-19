var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'frontend');

var config = {
  entry: ["whatwg-fetch", APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
};

module.exports = config;