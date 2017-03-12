var path = require('path');

module.exports = {
    entry: './app.js',
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        publicPath: '/assets/',
        filename: '../resources/static/built/bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
