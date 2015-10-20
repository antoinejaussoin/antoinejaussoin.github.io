var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './source/index.jsx'
    ],
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname+'/build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.jsx$/, loaders: ['jsx', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
        ]
    },
    externals: {

    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
