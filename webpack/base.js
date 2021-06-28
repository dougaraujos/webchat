/**
 * IMPORTS
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const {resolve} = require('path');


/**
 * EXPORTS
 */
module.exports = {
    entry: [
        resolve('src/index.tsx'),
    ],
    module: {
        rules: [
            {
                test: /(\.d)?\.tsx?$/,
                use: [
                    'awesome-typescript-loader',
                    'eslint-loader'
                ],
            },
            {
                loader: ['css-hot-loader'].concat(
                    ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'typings-for-css-modules-loader',
                                options: {
                                    camelCase: true,
                                    localIdentName: '[local]',
                                    modules: true,
                                    namedExport: true,
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                ),
                test: /\.css$/
            },
            {
                loader: ['css-hot-loader'].concat(
                    ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'typings-for-css-modules-loader',
                                options: {
                                    camelCase: true,
                                    localIdentName: '[local]-[hash:base64:5]',
                                    modules: true,
                                    namedExport: true,
                                    sass: true,
                                    sourceMap: true
                                }
                            },
                            'sass-loader'
                        ]
                    })
                ),
                test: /\.scss$/
            },
            {
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]'
                },
                test: /\.(jpg|jpeg|gif|png|webp)$/
            },
            {
                loader: 'file-loader',
                options: {
                    name: 'assets/fonts/[name].[ext]'
                },
                test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/
            }
        ]
    },
    output: {
        path: resolve(__dirname, '../build'),
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin({
            allChunks: true,
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.d.ts'],
        modules: ['node_modules'],
        plugins: [
            new TsConfigPathsPlugin()
        ]
    }
};
