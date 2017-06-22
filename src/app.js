const path = require('path');
const express = require('express');
const cors = require('express-cors');
var bodyParser = require('body-parser')

const users = require('./users');

const port = (process.env.PORT || 3000);
const app = express();

// Mogan here if needed
// const morgan = require('morgan');
// app.use(morgan('dev'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.use('/api', users);

app.use(express.static('public')); // re-examine this behavior later

app.use('/assets', express.static(path.join(__dirname, '../app/assets')));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
