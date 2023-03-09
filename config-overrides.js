const webpack = require('webpack');
const { override, addWebpackPlugin, addWebpackResolve } = require('customize-cra');

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
//       "fs": false,
//       "tls": require.resolve("tls"),
//       "net": require.resolve("net"),
//       "path": require.resolve("path"),
//       "zlib": require.resolve("browserify-zlib"),
//       "http": require.resolve("stream-http"),
//       "url": require.resolve("url"),
//       "https": false,
//       "stream": require.resolve("stream"),
//       "crypto": require.resolve("crypto-browserify"),
//       "buffer": require.resolve("buffer/"),
//       "assert": require.resolve("assert"),
//       "util": require.resolve("util"),
//     }
//   })
// );

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
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
  console.log(config.resolve)
  console.log(config.plugins)

  return config
}