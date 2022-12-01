let defaultTheme = require('./lib/public/default-theme.js');
module.exports = (
  defaultTheme.__esModule ? defaultTheme : { default: defaultTheme }
).default;
