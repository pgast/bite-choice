module.exports = function override(config, env) {
  //do stuff with the webpack config...
  // config.resolve.fallback = {
  //   "fs": false,
  //   "tls": false,
  //   "net": false,
  //   "path": false,
  //   "zlib": false,
  //   "http": false,
  //   "https": false,
  //   "stream": false,
  //   "crypto": false,
  // }

  // config.resolve.alias = {
  //   process: "process/browser"
  // }

  return config;
}