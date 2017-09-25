const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC = path.join(__dirname, 'src');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${SRC}/popup.html`,
  inject: true,
  filename: 'popup.html',
  chunks: ['popup']
});

module.exports = {
  entry: {
    popup: `${SRC}/popup.js`,
    background: `${SRC}/background.js`
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(ico|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader?limit=100000'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?limit=100000',
          {
            loader: 'img-loader',
            options: {
              enabled: true,
              optipng: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ]
  },
  stats: {
    children: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: `${SRC}/manifest.json` },
      { context: `${SRC}/assets`, from: 'icon-**', to: 'assets' }
    ]),
    HtmlWebpackPluginConfig,
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }

};
