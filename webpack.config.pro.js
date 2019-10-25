const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')
const autoprefixer = require('autoprefixer')

const outputDirectory = 'public';
const PACKAGE = require('./package.json');
const banner = PACKAGE.name + ' v' + PACKAGE.version + '\nCopyright © Imesh Chamara 2019\n@license ' + PACKAGE.license + '\nhttp://ic-tech.dx.am';


module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            }
          }, 'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            }
          }, 'css-loader',
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
    new webpack.BannerPlugin(banner),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: 'style/[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'ELearn',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['elearn', 'vendor'],
      favicon: './src/public/favicon.ico',
      minify: {
          collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Offline',
      template: './src/offline.html',
      filename: 'offline.html',
      chunks: [],
      favicon: './src/public/favicon.ico',
      minify: {
          collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'PageNotFound',
      template: './src/404.html',
      filename: '404.html',
      chunks: [],
      favicon: './src/public/favicon.ico',
      minify: {
          collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Signin',
      template: './src/signin.html',
      filename: 'signin.html',
      chunks: ['signin', 'vendor'],
      favicon: './src/public/favicon.ico',
      minify: {
          collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Search',
      template: './src/search.html',
      filename: 'search.html',
      chunks: ['search', 'vendor'],
      favicon: './src/public/favicon.ico',
      minify: {
          collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Profile',
      template: './src/profile.html',
      filename: 'profile.html',
      chunks: ['profile', 'vendor'],
      favicon: './src/public/favicon.ico',
      minify: {
          collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Lessons',
      template: './src/lessons.html',
      filename: 'lessons.html',
      chunks: ['lessons', 'vendor'],
      favicon: './src/public/favicon.ico',
      minify: {
          collapseWhitespace: true
      }
    })
    /*,new CompressionPlugin()*/
  ],
  optimization: {
    minimize: true,
    concatenateModules: true,
    minimizer: [/*new UglifyJsPlugin(),*/ new OptimizeCSSAssetsPlugin(),new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendor'
        }
      }
    }
  }
});
