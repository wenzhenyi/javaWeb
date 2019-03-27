const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var SRC = '../src';
var JS_SRC = SRC + '/**/*.js';

module.exports = {
    entry: '../src/index/index.js',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin()
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, "../static/js")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};