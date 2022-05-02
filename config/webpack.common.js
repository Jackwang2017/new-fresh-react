const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isENV = process.env.NODE_ENV !== 'production';
module.exports = {
  entry: {
    main: path.resolve(__dirname, '/src/index.ts'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              // useBuildIns: 'usage',
              plugins: isENV ? [require.resolve('react-refresh/babel')] : [],
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            }
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader',
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
    // parser: {
    //   javascript: {
    //     commonjsMagicComments: true,
    //   }
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  }
}