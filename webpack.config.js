const webpack = require("@nativescript/webpack");
const environment = require('./environment');

module.exports = (env) => {
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  webpack.chainWebpack((config) => {
    config.plugin('DefinePlugin').tap((args) => {
      Object.assign(args[0], {
        SERVER_API_URL: JSON.stringify(process.env.MY_API_ENDPOINT)
      })
      return args
    })
  })
  return webpack.resolveConfig();
};
