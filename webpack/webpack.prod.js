module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    maxEntrypointSize: 630000,
    maxAssetSize: 630000,
  },
};
