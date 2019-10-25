const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin= require('html-webpack-plugin')

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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ELearn',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['elearn', 'vendor'],
      favicon: './src/public/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      title: 'Offline',
      template: './src/offline.html',
      filename: 'offline.html',
      chunks: [],
      favicon: './src/public/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      title: 'PageNotFound',
      template: './src/404.html',
      filename: '404.html',
      chunks: [],
      favicon: './src/public/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      title: 'Signin',
      template: './src/signin.html',
      filename: 'signin.html',
      chunks: ['signin', 'vendor'],
      favicon: './src/public/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      title: 'Search',
      template: './src/search.html',
      filename: 'search.html',
      chunks: ['search', 'vendor'],
      favicon: './src/public/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      title: 'Profile',
      template: './src/profile.html',
      filename: 'profile.html',
      chunks: ['profile', 'vendor'],
      favicon: './src/public/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      title: 'Lessons',
      template: './src/lessons.html',
      filename: 'lessons.html',
      chunks: ['lessons', 'vendor'],
      favicon: './src/public/favicon.ico'
    })
  ],
  devServer: {
    host: '192.168.8.20'
  }
});
