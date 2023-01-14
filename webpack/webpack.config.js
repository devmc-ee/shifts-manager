const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = ({ env, stat }) => {
  const isDev = env === 'dev';

  const dotEnvConfParsed = dotenv.config({
    path: path.resolve(__dirname, '..', `./.env.${isDev ? 'local' : 'production'}`),
    debug: true,
  }).parsed;

  const envConfig = require(`./webpack.${env}.js`);

  if (dotEnvConfParsed) {
    const confParsed = {};
    for (const envItem in dotEnvConfParsed) {
      confParsed['REACT_APP_' + envItem] = JSON.stringify(dotEnvConfParsed[envItem]);
    }

    envConfig.plugins.push(new webpack.DefinePlugin(confParsed));
  }

  envConfig.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: !isDev && !!stat,
      statsOptions: { source: false },
    })
  );

  return merge(baseConfig, envConfig);
};
