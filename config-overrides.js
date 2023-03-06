const webpack = require('webpack');
const { override, addWebpackPlugin, addWebpackResolve } = require('customize-cra');

module.exports = override(
  addWebpackPlugin(
    new webpack.DefinePlugin({
      // "process.env": JSON.stringify(process.env),
      process: "process/browser",
    })
  ),
  addWebpackResolve({
    fallback: {
      "fs": false,
      "tls": require.resolve("tls"),
      "net": require.resolve("net"),
      "path": require.resolve("path"),
      "zlib": require.resolve("browserify-zlib"),
      "http": require.resolve("stream-http"),
      "url": require.resolve("url"),
      "https": false,
      "stream": require.resolve("stream"),
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer"),
      "assert": require.resolve("assert"),
      "util": require.resolve("util"),
    }
  })
);
