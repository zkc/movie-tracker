const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  context: __dirname,
   entry: [
     './app/index.js'
   ],
   output: {
     path: __dirname,
     filename: 'bundle.js',
     publicPath: '/'
   },
   module: {
     loaders: [{
       test: /.js?$/,
       loader: 'babel-loader',
       include: path.join(__dirname, 'app'),
       exclude: /node_modules/,
       query: {
         presets: ['es2015', 'react', 'stage-0']
       },
       { test: /\.css$/, loader: "style!css" },
       { test: /\.scss$/, loader: "style!css!sass" },
       { test: /\.svg$/, loader: 'svg-inline-loader'}
     }]
   },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  }
};
