'use strict'
const port = process.env.port || process.env.npm_config_port || 9528 // dev port
const webpack = require('webpack')

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: './',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_PROXY_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        },
        secure: false
      }
    }
  }
}
