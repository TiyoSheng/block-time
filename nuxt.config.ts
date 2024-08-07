// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: [
    '~/plugins/naive-ui.js'
  ],
  css: [
    '~/assets/styles/reset.css',
    '~/assets/styles/style.css',
  ],
})
