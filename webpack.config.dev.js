const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')
const autoprefixer = require('autoprefixer')

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          }]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          }, 'sass-loader'],
      }
    ]
  },
  devServer: {
    host: '192.168.8.11'
  }
});
