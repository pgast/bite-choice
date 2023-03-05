const webpack = require('webpack')
const { override, addWebpackPlugin } = require('customize-cra')

module.exports = override(
  addWebpackPlugin(
    new webpack.DefinePlugin({
      process: { env: {} },
    })
  )
)

// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   config.resolve.fallback = {
//     "fs": false,
//     "tls": false,
//     "net": false,
//     "path": false,
//     "zlib": false,
//     "http": require.resolve("stream-http"),
//     "url": require.resolve("url"),
//     "https": false,
//     "stream": false,
//     "crypto": false,
//     "util": false,
//     "querystring": false,
//   }

//   return config;
// }
