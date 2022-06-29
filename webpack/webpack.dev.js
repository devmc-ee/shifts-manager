const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    devServer: {
        hot: true,
        open: true,
    },
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [new ReactRefreshWebpackPlugin()],
};
