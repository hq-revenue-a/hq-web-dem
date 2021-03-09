const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = () => {
    console.log("build ref: ", process.env.FOLDER)
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
