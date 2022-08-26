const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
var HtmlWebpackPlugin = require('html-webpack-plugin') // 把打包后的文件直接注入到html模板中
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', // 设置开发模式
  // output: {
  //   path: path.resolve(__dirname, "./build/development"), // 动态获取出口路径(绝对路径)-文件编译后的位置
  //   filename: "bundle.js", // 出口文件名
  // },
  output: {
    path: path.resolve(__dirname, 'demo'), // 动态获取出口路径(绝对路径)-文件编译后的位置
    filename: 'demo.js', // 出口文件名
  },
  devServer: {
    port: 8888, // 设置端口号，如果没有设置，会默认端口号
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

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
    }),
  ],
}
