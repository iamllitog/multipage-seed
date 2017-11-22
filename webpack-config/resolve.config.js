var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
module.exports = {
  // 模块别名的配置，为了使用方便，一般来说所有模块都是要配置一下别名的
  alias: {
    /* 各种目录 */
    asset: path.resolve(dirVars.assetDir),
    vendor: dirVars.vendorDir,

    /* style */
    style: path.resolve(dirVars.styleDir),
    /* layout */
    layout: path.resolve(dirVars.layoutDir),
    /* partial */
    partial: path.resolve(dirVars.partialDir),
    /* common */
    common: path.resolve(dirVars.commonDir),

  },

  // 当require的模块找不到时，尝试添加这些后缀后进行寻找
  extensions: ['.js', '.ts', '.css', '.scss'],
};
