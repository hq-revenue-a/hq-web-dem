const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode:'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                NAME: JSON.stringify(process.env.NAME),
                VERSION: JSON.stringify(process.env.VERSION),
            },
        }),
    ]
};