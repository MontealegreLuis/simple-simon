const path = require('path');
const fs = require('fs');

const entries = fs.readdirSync('./specs/')
    .filter((file) => file.match(/.*\.js$/))
    .map((file) => './specs/' + file)
;

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'specs.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};