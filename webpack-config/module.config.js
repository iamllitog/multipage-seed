var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var eslintFormatter = require('eslint-friendly-formatter');
module.exports = {
  rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract([
        {
          loader: 'css-loader',
          options: {
            minimize: true,
            '-autoprefixer': true,
          },
        },
        {
          loader: 'postcss-loader',
          options: require('./config/postcss.config.js'),
        },
      ]),
    },
    {
      test: /\.js$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      include: dirVars.srcRootDir,
      exclude: dirVars.vendorDir,
      options: {
        formatter: eslintFormatter,
        fix: true,
        configFile: path.resolve(dirVars.rootDir, './.eslintrc.js'),
        failOnWarning: true,
        failOnError: true,
      },
    },
    {
      test: /\.js$/,
      include: dirVars.srcRootDir,
      loader: 'babel-loader',
      options: {
        presets: [['es2015', { loose: true }]],
        cacheDirectory: true,
        plugins: ['transform-runtime'],
      },
    },
    {
      test: /\.html$/,
      include: dirVars.srcRootDir,
      loader: 'html-loader',
    },
    {
      test: /\.ejs$/,
      include: dirVars.srcRootDir,
      loader: 'ejs-loader',
    },
    {
      // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
      // 如下配置，将小于8192byte的图片转成base64码
      test: /\.(png|jpg|gif)$/,
      include: dirVars.srcRootDir,
      loader: 'url-loader',
      options: {
        limit: 8192,
        name: './static/img/[hash].[ext]',
      },
    },
    {
      // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
      test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
      include: dirVars.srcRootDir,
      loader: 'file-loader',
      options: {
        name: 'static/fonts/[name].[hash].[ext]',
      },
    },

  ],
};
