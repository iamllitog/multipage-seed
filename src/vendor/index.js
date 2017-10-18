module.exports = {
  js: {
    html5shiv: require('!!file-loader?name=static/js/[name].[ext]!./ie-fix/html5shiv.min.js'),
    respond: require('!!file-loader?name=static/js/[name].[ext]!./ie-fix/respond.min.js'),
    jquery: require('!!file-loader?name=static/js/[name].[ext]!jquery/dist/jquery.min.js'),
  },
  images: {
  },
};
