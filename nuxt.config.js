
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "闲云旅游网",
    link: [
      // 可以放外网下的样式文件   
      { rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/font_1168872_ehvuah8v57g.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: "http://127.0.0.1:1337"
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
