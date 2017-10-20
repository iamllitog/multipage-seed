const vendor = require('vendor');
const content = require('./view.ejs'); // 整个页面布局的模板文件，主要是用来统

module.exports = content({
  vendor,
});
