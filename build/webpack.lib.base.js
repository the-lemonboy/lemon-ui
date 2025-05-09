// 库打包的主要配置
// 引入vue-loader插件
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 引入清除打包后文件的插件（最新版的需要解构，不然会报不是构造函数的错，而且名字必须写CleanWebpackPlugin）

module.exports = {
  // 我们打包组件库时不需要把Vue打包进去
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5120,
              esModule: false,
              fallback: 'file-loader',
              name: 'images/[name].[hash:4].[ext]',
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                prettify: false,
                preserveWhitespace: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin(), new CompressionPlugin()],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, '../examples'),
      UI: path.resolve(__dirname, '../packages/components'),
    },
    extensions: ['*', '.js', '.vue'],
  },
};
