const path = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve.bind(path, __dirname, '..');
const phaserRoot = root.bind(path, 'node_modules/phaser/build/custom');

module.exports = ({
  host = process.env.DEV_HOST || 'localhost',
  port = process.env.DEV_PORT || 92
} = {}) => {
  return {
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
      host,
      port,
      historyApiFallback: true,
      stats: 'minimal',
    },
    entry: {
      main: root('src/main.ts'),
      vendor: root('src/vendor.ts'),
      polyfill: root('src/polyfill.ts'),
    },
    output: {
      publicPath: `http://${host}:${port}/`,
      path: root('dist'),
      filename: '[name].bundle.js'
    },
    resolve: {
      modules: [
        root('src'),
        'node_modules',
      ],
      alias: {
        ld48: root('src/app'),
        assets: root('src/assets'),
        phaser: phaserRoot('phaser-split.js'),
        pixi: phaserRoot('pixi.js'),
        p2: phaserRoot('p2.js'),
      },
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
        },
        {
          test: /phaser-split\.js$/,
          loader: 'expose-loader?Phaser',
        },
        {
          test: /pixi\.js$/,
          loader: 'expose-loader?PIXI',
        },
        {
          test: /p2\.js$/,
          loader: 'expose-loader?p2',
        },
        {
          test: /\.png$/,
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash:6].[ext]'
          }
        }
      ],
    },
    plugins: [
      new CommonsChunkPlugin({
        name: ['main', 'vendor', 'polyfill'],
        minChunks: Infinity,
      }),
      new HtmlWebpackPlugin({
        template: root('src/index.html'),
        inject: true,
        hash: false,
      }),
    ],
  };
};
