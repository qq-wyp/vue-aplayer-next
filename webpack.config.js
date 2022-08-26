var path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  entry: './src/vue-aplayer.vue',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', // 设置开发模式
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-aplayer.min.js',
    library: 'VueAPlayer',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
  },

  externals: {
    'hls.js': {
      amd: 'hls.js',
      commonjs: 'hls.js',
      commonjs2: 'hls.js',
      root: 'Hls',
    },
    vue: {
      amd: 'vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      root: 'Vue',
    },
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader', // 将所有的计算后的样式加入页面中,html页面中插入css代码
          },
          {
            loader: 'css-loader', // 解析CSS样式,可以用模块的方式手动对象形式写样式,style-loader自动处理了这个注入
          }, //能够使用类似@import 和 url(...)的方法实现 require()的功能
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(vue)$/,
        use: {
          loader: 'vue-loader',
        },
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=40000',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader',
      },
    ],
  },
  devtool: '#source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV}"`,
      },
      VERSION: JSON.stringify(require('./package.json').version),
    }),
    new VueLoaderPlugin(),
  ],
}
