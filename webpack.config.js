const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: '/desc/',
    inline: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-2'],
      },
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        loader: ['css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'],
        fallback: 'style-loader',
        publicPath: '/dist',
      }),
    }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'index.css',
      disable: false,
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),
  ],
};

module.exports = config;
