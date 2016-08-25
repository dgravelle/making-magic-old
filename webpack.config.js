const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: __dirname + '/app',
        loader: 'babel'
      }
    ]
  },
  output: {
    filename: 'jsx-bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
}
