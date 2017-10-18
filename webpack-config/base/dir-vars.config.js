var path = require('path');
var moduleExports = {};

// 源文件目录
moduleExports.rootDir = path.resolve(__dirname, '../../'); // 项目根目录
moduleExports.srcRootDir = path.resolve(moduleExports.rootDir, './src'); // 项目业务代码根目录
moduleExports.vendorDir = path.resolve(moduleExports.srcRootDir, './vendor'); // 存放所有不能用npm管理的第三方库
moduleExports.pageDir = path.resolve(moduleExports.srcRootDir, './page'); // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
moduleExports.assetDir = path.resolve(moduleExports.srcRootDir, './asset'); // 存放各个页面使用到的公共资源
moduleExports.styleDir = path.resolve(moduleExports.srcRootDir, './style'); // 存放样式
moduleExports.layoutDir = path.resolve(moduleExports.srcRootDir, './layout'); // 存放layout
moduleExports.partialDir = path.resolve(moduleExports.srcRootDir, './partial'); // 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
moduleExports.commonDir = path.resolve(moduleExports.srcRootDir, './common'); // 其他公用逻辑

// 生成文件目录
moduleExports.buildDir = path.resolve(moduleExports.rootDir, './build'); // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）
moduleExports.buildPublicDir = path.resolve(moduleExports.buildDir, './public'); // 生成的public文件

module.exports = moduleExports;
