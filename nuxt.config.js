
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: "ru, en"
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { "http-equiv": "X-UA-Compatible", content: "ie=edge" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#54C8FF' },
  css: ["assets/vendor/_vendor.scss"
  ],
  plugins: [
    { src: "~/plugins/semantic-ui-vue.js" },
    { src: "~/plugins/vue-particles.js", ssr: false }
  ],
  buildModules: [
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "cookie-universal-nuxt"
  ],
  build: {
    extend(config, ctx) {
    }
  },
  server:
    process.env.NODE_ENV !== "development"
      ? {
        port: 8000,
        host: "127.0.0.1"
      }
      : {
        /* port: 8000,
        host: "192.168.1.101" */
      }
}
