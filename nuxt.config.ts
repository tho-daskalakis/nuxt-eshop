import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-06',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/icon'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  icon: {
    serverBundle: {
      collections: ['mdi']
    }
  }
});
