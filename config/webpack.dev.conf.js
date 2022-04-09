const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new ReactRefreshPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 8989,
    open: true,
  }
});
