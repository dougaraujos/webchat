/**
 * IMPORTS
 */
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const baseConfig = require('./base');
const merge = require('webpack-merge');


/**
 * EXPORTS
 */
module.exports = merge(baseConfig, {
    entry: [
        'webpack-dev-server/client'
    ],
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        open: true,
        overlay: true,
        progress: true,
        watchOptions: {
            ignored: /node_modules/,
            poll: true
        }
    },
    devtool: 'source-map',
    mode: 'development',
    output: {
        publicPath: '/'
    },
    plugins: [
        new HardSourceWebpackPlugin()
    ]
});
