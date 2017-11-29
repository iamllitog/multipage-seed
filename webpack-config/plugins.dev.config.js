var webpack = require('webpack');
var pluginsConfig = require('./base/plugins.config.js');
var pageArr = require('./base/page-entries.config.js');
var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: false,
}));

pageArr.forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: `../views/${page}.ejs`,
    template: path.resolve(dirVars.pageDir, `./${page}/render.js`),
    chunks: ['webpack-runtime', page, 'commons'],
    hash: true, // 为静态资源生成hash值
    xhtml: true,
  });
  pluginsConfig.push(htmlPlugin);
});

pluginsConfig.push(new webpack.ProvidePlugin({
  Promise: 'bluebird',
}));

module.exports = pluginsConfig;
