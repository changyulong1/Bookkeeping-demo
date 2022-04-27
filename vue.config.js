//error: Require statement not part of import statement 提交报错解决方案
/* eslint-disable */
const path = require("path")

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/Bookkeeping/'
      : '/',
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')
    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include.add(dir).end()
        .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
        //svg区fill解决方案
      .use('svgo-loader').loader('svgo-loader')
      // .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))
      .end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir)
  }
}
