var precss = require('precss');
var autoprefixer = require('autoprefixer');
function postcss() {
  return [precss, autoprefixer({
    remove: false,
    browsers: ['ie >= 8', '> 1% in CN'],
  })];
};
module.exports = {
  ident: 'postcss',
  plugins: (loader) => postcss(),
};
