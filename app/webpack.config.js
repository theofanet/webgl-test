const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/index.js',
    watch: true,
    output: {
        filename: 'main.js',
        path: BUILD_DIR,
    },
    devServer: {
        contentBase: BUILD_DIR,
        port: 8080,
        host: "localhost",
        compress: true,
        hot: true,
        open: true,
        historyApiFallback: true
    },
};