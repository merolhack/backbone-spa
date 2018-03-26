const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
  ]
};

module.exports = config;
