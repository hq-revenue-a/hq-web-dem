const path = require('path');
const webpack = require("webpack");

module.exports = (env) => {
    console.log('VERSION: ', env.VERSION);
    console.log('NAME: ', env.NAME);
    return {
        mode: 'production',
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env.NODE_ENV),
                    NAME: JSON.stringify(env.NAME),
                    VERSION: JSON.stringify(env.VERSION),
                },
            }),
        ]
    }
};
