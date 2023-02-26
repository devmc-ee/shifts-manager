const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-scss"],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    const dotEnvConfParsed = dotenv.config({
      path: path.resolve(__dirname, '..', './.env.local'),
      debug: true,
    }).parsed;

    if (dotEnvConfParsed) {
      const confParsed = {};
      for (const envItem in dotEnvConfParsed) {
        confParsed['REACT_APP_' + envItem] = JSON.stringify(dotEnvConfParsed[envItem]);
      }
  
      config.plugins.push(new webpack.DefinePlugin(confParsed));
     
    }
    
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      os: false,
    }

    config.module.rules.forEach((rule) => {
      if(rule.type === 'asset/resource') {
        rule.test = test = /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
      }
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    },)

    return  config
},
};