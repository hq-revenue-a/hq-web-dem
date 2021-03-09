const path = require('path');
// const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
    return {
        mode: 'production',
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist', env.FOLDER),
        },
        plugins: [
            new Dotenv({
                path: './vars/test-hotel/alecsa.env',
                safe: true,
                allowEmptyValues: true,
                systemvars: true,
                silent: true,
                defaults: false
            })
        ]
    }
};
