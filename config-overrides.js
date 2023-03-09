const webpack = require('webpack');
const { override, addWebpackPlugin, addWebpackResolve } = require('customize-cra');

// Falla el buffer aqui
// module.exports = override(
//   addWebpackPlugin(
//     new webpack.DefinePlugin({
//       process: {env: {}},
//     }),
//     new webpack.DefinePlugin({
//       Buffer: ["buffer", "Buffer"],
//     })
//   ),
//   addWebpackResolve({
//     alias: { 
//       process: "process/browser"
//     },
//     fallback: {
  //       "stream": require.resolve("stream"),
  //       "buffer": require.resolve("buffer/"),
  //       "http": require.resolve("stream-http"),
  //       "https": false,
  //       "zlib": require.resolve("browserify-zlib"),
  //       "crypto": require.resolve("crypto-browserify"),
  //       "fs": false,

//       "tls": require.resolve("tls"),
//       "net": require.resolve("net"),
//       "path": require.resolve("path"),
//       "url": require.resolve("url"),
//       "assert": require.resolve("assert"),
//       "util": require.resolve("util"),
//     }
//   })
// );

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
    http: require.resolve("stream-http"),
    https: false,
    zlib: require.resolve("browserify-zlib"),
    crypto: require.resolve("crypto-browserify"),
    fs: false,
    "tls": require.resolve("tls"),
    "net": require.resolve("net"),
    "path": require.resolve("path"),
    "url": require.resolve("url"),
    "assert": require.resolve("assert"),
    "util": require.resolve("util"),
  }
  config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ]

  return config
}