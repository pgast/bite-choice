module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.fallback = {
    "fs": false,
    "tls": false,
    "net": false,
    "path": false,
    "zlib": false,
    "http": require.resolve("stream-http"),
    "https": false,
    "stream": false,
    "crypto": false,
    "querystring": false,
  }

  return config;
}