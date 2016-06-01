var path = require('path')
var express = require('express')
var favicon = require('serve-favicon')
var webpack = require('webpack')
var config = require('./webpack/webpack.config.dev')

var _DEV_ = process.env.NODE_ENV == 'development'
var PORT = 3000
var app = express()
var compiler = webpack(config)

if (_DEV_) {
	app.use(require('webpack-hot-middleware')(compiler))
	app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: config.output.publicPath }))
}

app.use('/public', express.static(path.join(__dirname, '/public')))
// app.use(favicon(path.join(__dirname, '/public/assets/favicon.ico')))

app.use('*', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function() {
  console.log('Dev server listening on port', 3000)
})
