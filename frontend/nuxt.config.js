import colors from 'vuetify/es5/util/colors'

const environment = process.env.NODE_ENV || 'development'
const env = require(`./env.${environment}.js`)

const title = '小１からのさんすうゲーム'
const description = '小学生用さんすうゲーム。成長の記録が残ります。簡単な脳トレとしても親子であそべます。'

export default {
  env: env,

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  router: {
    base: '/e1-math-plus-10/frontend/dist/',
    middleware: ['authentication']
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - 小１からのさんすうゲーム',
    title: 'Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:site_name', property: 'og:site_name', content: title },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://kaku3.github.io/e1-math-plus-10/frontend/dist/' },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:image', property: 'og:image', content: 'https://kaku3.github.io/e1-math-plus-10/frontend/dist/icon-1280x640.png' },
      { name: 'twitter:card', content: 'summary' },　//twitterの画像サイズ
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/persistedstate.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-webfontloader',
    'vue-social-sharing/nuxt'
  ],
  webfontloader: {
    google: {
      families: [ 'Fredoka+One', 'Press+Start+2P','DotGothic16' ]
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: title,
      lang: 'ja',
      short_name: title,
      title: title,
      'og:title': title,
      description: description,
      'og:description': description,
      theme_color: '#fefefe',
      background_color: '#fefefe',
      "icons": [
        {
          "src": "/e1-math-plus-10/frontend/dist/android-chrome-36x36.png",
          "sizes": "36x36",
          "type": "image/png"
        },
        {
          "src": "/e1-math-plus-10/frontend/dist/android-chrome-48x48.png",
          "sizes": "48x48",
          "type": "image/png"
        },
        {
          "src": "/e1-math-plus-10/frontend/dist/android-chrome-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "/e1-math-plus-10/frontend/dist/android-chrome-96x96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "/e1-math-plus-10/frontend/dist/android-chrome-128x128.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "/e1-math-plus-10/frontend/dist/android-chrome-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "/e1-math-plus-10/frontend/dist/android-chrome-152x152.png",
          "sizes": "152x152",
          "type": "image/png"
        },
        {
          "src": "/e1-math-plus-10/frontend/dist/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/e1-math-plus-10/frontend/dist/android-chrome-256x256.png",
          "sizes": "256x256",
          "type": "image/png"
        },
        {
          "src": "/e1-math-plus-10/frontend/dist/android-chrome-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "/e1-math-plus-10/frontend/dist/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    },
  },
  workbox: {
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, _) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  },
}
