const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { override } = require("customize-cra");

module.exports = function override(config, env) {
  config.optimization = { minimizer: [new UglifyJsPlugin()] }
  return config;
}

