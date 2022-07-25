const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    devServer: {
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [new ReactRefreshWebpackPlugin()],
};
