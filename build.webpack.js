module.exports = {
    entry: './src/app.js',
    output: {
        // If in production mode we put the files into the dist folder instead
        path: process.env.NODE_ENV === 'production' ? './dist' : './build',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader", exclude: /(node_modules|__tests__)/ }
        ],
        loaders: [
            // When using with transpiling loaders (like babel-loader), make sure they are in correct order
            // (bottom to top). Otherwise files will be check after being processed by babel-loader
            { test: /\.js$/, loader: 'babel', query: {compact: false}},
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file" },
            { test: /\.html/, loader: 'file?name=[name].[ext]' }
        ]
    },
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: "mock",
        __dirname: "mock",
        setImmediate: true,
        fs: "empty",
        net: "empty",
        tls: "empty"
    }
};
