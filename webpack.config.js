const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  context: __dirname,
   entry: [
     './app/index.js'
   ],
   output: {
     path:  path.join(__dirname, 'public'),
     filename: 'bundle.js',
    //  publicPath: 'public'
   },
   module: {
     loaders: [{
       test: /.js?$/,
       loader: 'babel-loader',
       include: path.join(__dirname, 'app'),
       exclude: /node_modules/,
       query: {
         presets: ['es2015', 'react']
       }
     },
     { test: /\.css$/, loader: "style!css" },
     { test: /\.svg$/, loader: 'svg-url-loader'}]
   },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  }
};
