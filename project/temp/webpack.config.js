const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: {
    'app': './app/main.ts',
    'polyfills': [
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone',
      'zone.js/dist/long-stack-trace-zone'
    ]
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {test: /\.component.ts$/, loader: 'ts!angular2-template'},
      {test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')},
      {test: /\.css$/, loader: 'raw'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css', '.scss']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfills'
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    })
  ]

};