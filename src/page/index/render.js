const content = require('./view.ejs');
const layout = require('layout/main/render');
module.exports = layout.run(content());
