module.exports = {
  devServer: {
    port: '3000',
    open: true,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  lintOnSave: 'error',
  // 基本URL
  publicPath: '/',
  // 静态资源目录
  assetsDir: 'assets',
  // 生产环境的 source map
  productionSourceMap: false,
  // 全局样式
  // css: {
  //   extract: true,
  //   sourceMap: false,
  //   // css预设器配置项
  //   loaderOptions: {},
  //   modules: false
  // },
  // pages: {
  //   index: {
  //     // entry for the pages
  //     entry: 'src/main.js',
  //     // the source template
  //     template: 'plubic/index.html',
  //     // output as dist/index.html
  //     filename: 'index.html',
  //     // when using title option,
  //     // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: '首页'
  //     // vuex: process.env.NODE_ENV === 'development' ? '' : 'https://cdn.bootcss.com/vuex/3.1.1/vuex.min.js',
  //     // router: process.env.NODE_ENV === 'development' ? '' : 'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js'
  //     // chunks to include on this pages, by default includes
  //     // extracted common chunks and vendor chunks.
  //   }
  //   // when using the entry-only string format,
  //   // template is inferred to be `public/subpage.html`
  //   // and falls back to `public/index.html` if not found.
  //   // Output filename is inferred to be `subpage.html`.
  //   // subpage: ''
  // },
  // 请求代理
  // devServer: {
    
    // proxy: {
    //   '/api': {
    //     target: process.env.VUE_APP_BaseUrl,
    //     pathRewrite: { '^/api': '' },
    //     changeOrigin: true,
    //     secure: false
    //   }
    // }
  // },
  configureWebpack: {
    resolve: {
      alias: {
        // '/':'@/*'
        // '@common': '@/common',
        // '@article': './src/page/article/index.vue',
        // '@api': '@/api',
        // '@plugin': '@/plugin',
        // '@img': '@/assets/image',
        // '@/page': '@/page/*'
      },
      extensions: ['.js', '.vue', '.json', '.ts', '.tsx']
    },

    // externals: process.env.NODE_ENV === 'development' ? {} : {
    //   'vue': 'Vue',
    //   'vue-router': 'VueRouter',
    //   'element-ui': 'ELEMENT',
    //   'vuex': 'Vuex',
    //   'axios': 'axios',
    //   'cookie': 'js-cookie'
    // }
  }
}
