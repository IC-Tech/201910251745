const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin= require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const outputDirectory = 'public';

module.exports = {
  entry: {
    'p201909091148': './src/index.js'
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader?name=assets/[name].[ext]&limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    open: false
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'P201909091148',
      template: './src/public/index.html',
      filename: 'index.html',
      chunks: ['p201909091148', 'vendor'],
      favicon: './src/public/favicon.ico'
    }),
    new CopyPlugin([
      {
        from: 'src/public',
        to: './'
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.__IC_DEV__': process.env.WEBPACK_DEV_SERVER == 'true' ? 'true' : 'false'
    })
  ]
};
