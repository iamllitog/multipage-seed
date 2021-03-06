require('./webpack-config/before-build');

module.exports = {
  entry: require('./webpack-config/entry.config.js'),
  output: require('./webpack-config/output.config.js'),
  module: require('./webpack-config/module.config.js'),
  resolve: require('./webpack-config/resolve.config.js'),
  plugins: require('./webpack-config/plugins.product.config.js'),
  externals: require('./webpack-config/externals.config.js'),
};
