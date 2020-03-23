const path = require("path")
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.96.62.114:10086', // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  // publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          deleteOriginalAssets: false
        })]
      }
    }
  }
}
