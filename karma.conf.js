var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    //browsers: [ process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome' ],
    browsers: [ 'PhantomJS' ],

    singleRun: true,

    frameworks: [ 'mocha', 'sinon' ],

    files: [
       'tests.webpack.js'
    ],

    preprocessors: {
       'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'nyan', 'verbose', 'coverage' ],

    coverageReport: {
      type: 'html',
      dir: 'coverage/'
    },

    webpack: {
      devtool: 'inline-source-map',
      //plugins: [
      //  new webpack.IgnorePlugin(/\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.html/)
      //],
      module: {
        preLoaders: [
          {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
          // When using with transpiling loaders (like babel-loader), make sure they are in correct order
          // (bottom to top). Otherwise files will be check after being processed by babel-loader
          { test: /\.js$/, loader: 'babel', query: {compact: false}},
          { test: /\.json$/, loader: 'json-loader' },
          { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file" },
          { test: /\.html/, loader: 'file?name=[name].[ext]' }
        ],
        postLoaders: [ {
          test: /\.js$/, include: /src\//, exclude: /(node_modules|__tests__)\//, loader: 'istanbul-instrumenter'
        }]
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
    },

    webpackServer: {
      noInfo: true
    }

  });
};
