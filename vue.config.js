module.exports = {
  configureWebpack: {
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 预编译 + 运行时，适用于 dev 环境
        }
      },
      devtool:'source-map'
    },
  publicPath:'/co/',
  runtimeCompiler: true,
  productionSourceMap:false,//是否生成.map文件，.map文件可以在source webpack 中显示vue源码
}