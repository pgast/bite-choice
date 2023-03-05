const webpack = require('webpack');
const { override, addWebpackPlugin, addWebpackResolve } = require('customize-cra');

module.exports = override(
  addWebpackPlugin(
    new webpack.DefinePlugin({
      // process: { env: {} },
      "process.env.YELP_API_KEY": JSON.stringify(process.env.YELP_API_KEY),
    })
  ),
  addWebpackResolve({
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": require.resolve("stream-http"),
      "url": require.resolve("url"),
      "https": false,
      "stream": false,
      "crypto": false,
      "util": false,
      "buffer": false,
      "assert": false,
    }
  })
);
