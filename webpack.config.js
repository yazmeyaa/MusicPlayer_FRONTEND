const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    //webpack-dev-server settings
    devServer: {
        static: {
          directory: path.join(__dirname, "public")
        },
        compress: true,

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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /fonts/,
                use: ['file-loader?name=[name].[ext]']
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                loader: "file-loader"
            }
        ],
    },
    resolve: {
        alias: {
            'hooks': path.resolve(__dirname, 'src/hooks'),
            'components': path.resolve(__dirname, 'src/views/components'),
            '@types': path.resolve(__dirname, 'src/@types'),
            'assets': path.resolve(__dirname, 'src/assets')
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/public', 'index.html')
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
};