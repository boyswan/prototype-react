var webpack = require('webpack');
var path = require('path')
var WebpackConfig = require('webpack-config').Config
var base = path.join(__dirname, '..', 'webpack/webpack.config.base.js')

module.exports = new WebpackConfig().extend(base).merge({
  debug: true,
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[local]____[hash:base64:4]'
      }
    ]
  }
})
