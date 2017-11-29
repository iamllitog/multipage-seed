var webpack = require('webpack');
var pluginsConfig = require('./base/plugins.config.js');
var pageArr = require('./base/page-entries.config.js');
var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/* webpack1下，用了压缩插件会导致所有loader添加min配置，而autoprefixser也被定格到某个browers配置 */
pluginsConfig.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
  },
}));

pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: true,
}));

pluginsConfig.push(new webpack.ProvidePlugin({
  Promise: 'bluebird',
}));

pluginsConfig.push(new webpack.NoEmitOnErrorsPlugin()); // 配合CLI的--bail，一出error就终止webpack的编译进程

/* HashedModuleIdsPlugin 这个插件，他是根据模块的相对路径生成一个长度只有四位的字符串作为模块的 module id ，
这样就算引入了新的模块，也不会影响 module id 的值，只要模块的路径不改变的话。 */
pluginsConfig.push(new webpack.HashedModuleIdsPlugin());

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

module.exports = pluginsConfig;
