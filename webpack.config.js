const path              = require('path');
const webpack           = require('webpack');
const PATHS = {
  build: path.resolve(__dirname, "build"),
  public: path.resolve(__dirname, "public")
};

const config = {
  entry: {
    app: './app/entry.js'
  },
  output: {
    path: PATHS.public,
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devtool: 'eval-source-map',
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
