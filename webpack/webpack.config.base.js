var webpack = require('webpack');
var path = require('path')
var WebpackConfig = require('webpack-config').Config

module.exports = new WebpackConfig().merge({
  resolve: {
    root: path.join(__dirname, '..'),
    alias: {
      src: 'src',
      public: 'public',
      components: 'src/components',
    },
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  }
})
