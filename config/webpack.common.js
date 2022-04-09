const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '/src/index.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: ['babel-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', 'css-loader',
          {
            loader: "less-loader",
            options: {
              implementation: require("less"),
              sourceMap: true,
              javascriptEnabled: true,
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
        use: ['file-loader']
      }
    ],
    parser: {
      javascript: {
        commonjsMagicComments: true,
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(),
  ]
}