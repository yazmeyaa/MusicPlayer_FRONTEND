const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: "./src/index.tsx",
    //webpack-dev-server settings
    target: 'web',
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        historyApiFallback: true,
        compress: true,
        open: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.bundle\.ts$/,
                use: {
                    loader: 'bundle-loader',
                    options: {
                        name: '[name]'
                    }
                }
            },
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                loader: "file-loader"
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            }
        ],
    },
    resolve: {
        alias: {
            hooks: path.resolve(__dirname, 'src/hooks'),
            config: path.resolve(__dirname, 'src/config'),
            assets: path.resolve(__dirname, 'src/assets'),
            views: path.resolve(__dirname, 'src/views')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/public', 'index.html'),
            filename: path.join(__dirname, '/public/index.html'),
            favicon: path.join(__dirname, '/public/favicon.ico'),
            manifest: path.join(__dirname, '/public/manifest.json'),
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.parsed),
            'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production')
        })
    ].filter(Boolean),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
};