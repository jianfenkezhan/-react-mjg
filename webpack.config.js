'use strict'

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
// const appEntries = process.env.NODE_ENV = 'dev' ? ['webpack-hot-middleware/client?reload=true'] : [];


module.exports = {
  entry: './src/Entries/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '*',
      'webpack.js',
      'web.js',
      '.ts', 
      '.tsx',
      '.js',
      '.json'
    ]
  },
  
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "awesome-typescript-loader",
      },
      { 
        test: /\.(js|jsx)?$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
    ],
  },
  devtool: process.env.NODE_ENV === 'production' ? "source-map" : "inline-source-map",
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devServer: {
    publicPath: '/',
    hot: true,
    compress: true,
    port: 7002
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/Entries/index.html",
      inject:true,
      hash:false,
      minify:{
        removeComments:true,
        collapseWhitespace:false
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}
