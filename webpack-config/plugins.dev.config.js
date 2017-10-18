var webpack = require('webpack');
var pluginsConfig = require('./base/plugins.config.js');

pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: false,
}));

module.exports = pluginsConfig;
