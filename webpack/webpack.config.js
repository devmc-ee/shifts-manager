const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = ({ env }) => {
  const dotEnvConfParsed = dotenv.config({
    path: path.resolve(__dirname, '..', `./${env === 'dev' ? './.env.local' : './env.production'}`),
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

  return merge(baseConfig, envConfig);
};
