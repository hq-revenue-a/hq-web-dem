const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = () => {
    return {
        mode: 'production',
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist', process.env.FOLDER),
        },
        plugins: [
            new Dotenv({
                path: path.resolve(__dirname, 'vars', process.env.FOLDER, 'index.env'),
                safe: true,
                allowEmptyValues: true,
                systemvars: true,
                silent: true,
                defaults: false
            })
        ]
    }
};
