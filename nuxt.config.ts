// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  target: 'static',
  build: {
    loaders: {
      sass: {
        implementation: require('node-sass')
      }
    }
  },
  css: ["~/assets/css/app.scss"],
  
  vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "@/assets/css/vars/_colors.scss" as *; @use "@/assets/css/vars/_fonts.scss" as *; @use "@/assets/css/normalize.css" as *;',
          }
        }
      }
  }
})
