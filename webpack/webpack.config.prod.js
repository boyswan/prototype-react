var webpack = require('webpack');
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackConfig = require('webpack-config').Config
var base = path.join(__dirname, '..', 'webpack/webpack.config.base.js')

module.exports = new WebpackConfig().extend(base).merge({
  entry: ['./src/app.js'],
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new ExtractTextPlugin('style.min.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]____[hash:base64:4]')
      }
    ]
  }
})
