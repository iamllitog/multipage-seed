const vendor = require('vendor');
const layout = require('./view.ejs'); // 整个页面布局的模板文件，主要是用来统筹各个公共组件的结构
const header = require('partial/header/html.ejs'); // 页头的模板
const mainHeader = require('partial/mainHeader/html.ejs'); // 页头的模板
const footer = require('partial/footer/html.ejs'); // 页脚的模板

const moduleExports = {
  /* 整合各公共组件和页面实际内容，最后生成完整的HTML文档 */
  run: function(content) {
    const renderData = {
      header: header({vendor}),
      footer: footer({vendor}),
      mainHeader: mainHeader({vendor}),
      content,
    };
    return layout(renderData);
  },
};

module.exports = moduleExports;
