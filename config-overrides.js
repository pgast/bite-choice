const webpack = require('webpack');
const { override, addWebpackPlugin, addWebpackResolve } = require('customize-cra');

module.exports = override(
  addWebpackPlugin(
    new webpack.DefinePlugin({
      "process.env.YELP_API_KEY": JSON.stringify(process.env.YELP_API_KEY),
    })
  ),
  addWebpackResolve({
    fallback: {
      "fs": require.resolve("fs"),
      "tls": require.resolve("tls"),
      "net": require.resolve("net"),
      "path": require.resolve("path"),
      "zlib": require.resolve("zlib"),
      "http": require.resolve("stream-http"),
      "url": require.resolve("url"),
      "https": false,
      "stream": require.resolve("stream"),
      "crypto": require.resolve("crypto"),
      "buffer": require.resolve("buffer"),
      "assert": require.resolve("assert"),
      "util": require.resolve("util"),
    }
  })
);
