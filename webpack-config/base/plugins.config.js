var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HashOutput = require('webpack-plugin-hash-output');

var configPlugins = [
  /* 抽取出所有通用的部分 */
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons', // 需要注意的是，chunk的name不能相同！！！
    filename: '[name]/bundle.[chunkhash].js',
    minChunks: 4,
  }),
  /* 抽取出webpack的runtime代码()，避免稍微修改一下入口文件就会改动commonChunk，导致原本有效的浏览器缓存失效 */
  new webpack.optimize.CommonsChunkPlugin({
    name: 'webpack-runtime',
    filename: 'commons/webpack-runtime.[hash].js',
  }),
  /* 抽取出chunk的css */
  new ExtractTextPlugin('style/[name].styles.[contenthash].css'),
  new HashOutput({
    manifestFiles: 'webpack-runtime', // 指定包含 manifest 在内的 chunk
  }),
];

module.exports = configPlugins;
