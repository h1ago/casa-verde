const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        static: './public',
        hot: true,
        open: true,
        compress: true,
        port: 3000
    },

    entry: path.resolve(__dirname, './src/index.tsx'),

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.bundle.js',
        clean: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html'
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/, 
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/, 
                use: [ "style-loader", "css-loader" ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/inline',
            },


        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },


}