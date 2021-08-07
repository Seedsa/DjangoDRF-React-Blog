const path = require('path');
const webpack = require('webpack'); // webpack核心
const WebpackBaseConfig = require('./webpack.config.base');
const { merge } = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
module.exports = merge(WebpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.less$/i,
        include: [/[\\/]node_modules[\\/].*antd/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },

      {
        test: /\.less$/i,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader', // 转化 CSS 为 CommonJS
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              // modules: false,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: { '@primary-color': '#1DA57A' },
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
        ],
      },
      // {
      //   test: /\.less$/,
      //   exclude: [/src/],
      //   use: [
      //     require.resolve('style-loader'),
      //     {
      //       loader: require.resolve('css-loader'),
      //       options: {
      //         importLoaders: 1,
      //         // modules: true,
      //         // localIndexName:"[name]__[local]___[hash:base64:5]"
      //       },
      //     },
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         lessOptions: {
      //           javascriptEnabled: true,
      //         },
      //       },
      //     },
      //   ],
      // },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true,
    hotOnly: true,
  },
  plugins: [new FriendlyErrorsWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
});
