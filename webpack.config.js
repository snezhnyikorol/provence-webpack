const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, 'assets/js/main.js'),
  ],
  output: {
    filename: 'assets/js/bundle.js',
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'assets/js'),
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    },
    {
        test: /\.html$/,
        include: path.resolve(__dirname, '/'),
        use: ['raw-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      { 
          test: /\.(woff|woff2|eot|ttf|svg)$/, 
          loader: 'url-loader?limit=8128' 
        }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
        filename: '/assets/css/style.css',
        allChunks: true,
      }),
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new CopyWebpackPlugin([{
        from: './assets/fonts',
        to: './assets/fonts'
      },
      {
        from: './assets/img',
        to: './assets/img'
      },
      {
        from: './assets/pdf',
        to: './assets/pdf'
      },
      {
        from: './assets/video',
        to: './assets/video'
      }
    ]),
  ]
};