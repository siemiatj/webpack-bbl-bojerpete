const path = require('path');
const PATHS = {
  build: path.resolve(__dirname, "build"),
  out: path.resolve(__dirname, "out")
};

const config = {
  entry: {
    app: './app/entry.js'
  },
  output: {
    path: PATHS.out,
    filename: 'bundle.js'
  },
  devtool: "source-map",
  noInfo: true,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
    ]
  },
  resolve: {
    modulesDirectories: ['app', 'node_modules'],
    extensions: ['', '.js'],
  }
};

module.exports = config;
