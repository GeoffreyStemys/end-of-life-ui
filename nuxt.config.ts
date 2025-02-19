import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  srcDir: 'src/',
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    // '@nuxt/ui',
    '@primevue/nuxt-module'

],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  compatibilityDate: '2025-01-30',
})
