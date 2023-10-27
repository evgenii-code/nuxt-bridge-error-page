import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  bridge: {
    typescript: true,
    capi: true,
    nitro: true,
  },

  head: {
    title: 'project-template-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '/',
  },

  telemetry: false,
})
