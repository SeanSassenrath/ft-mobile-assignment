const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssvariables = require('postcss-css-variables');
const imports = require('postcss-import');
const nested = require('postcss-nested');
const combineLoaders = require('webpack-combine-loaders');
const path = require('path');

module.exports = env => {
  return {
    entry: {
      app: path.join(__dirname, '../src/'),
      vendor: ['react', 'react-dom', 'react-router'],
    },
    /**
     * output tells webpack where to dump the files it has processed.
     * [name].[hash].js will output something like app.3531f6aad069a0e8dc0e.js
     */
    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, '../build/'),
    },

    module: {
      loaders: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: combineLoaders(['babel-loader', 'eslint-loader']),
        },
        {
          test: /\.css$/,
          loader: combineLoaders([ //Combine style-loader and css-loader
            {
              loader: 'style-loader'
            }, {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          ])
        },
        {
          test: /\.jpg$|\.png$|\.svg$/,
          exclude: /node_modules/,
          loader: 'file-loader?[name].[hash].[ext]'
        }
      ],
    },
    postcss: function () { return [ autoprefixer, imports, nested, cssvariables ] },
    eslint: {
      configFile: './.eslintrc'
    },
    plugins: [
      // used to split out our sepcified vendor script
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].[hash].js',
      }),

      /**
      * HtmlWebpackPlugin will make sure out JavaScript files are being called
      * from within our index.html
      */
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html',
        inject: 'body',
      }),
    ],
  };
};
