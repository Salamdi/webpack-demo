const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.default = {
  mode: process.env.NODE_ENV || 'development',
  output: {
    clean: true,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
  ],
};
