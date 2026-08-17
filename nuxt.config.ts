import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-17',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      titleTemplate: '%s | Paroki Santo Yosef',
      meta: [
        {
          name: 'description',
          content: 'Website resmi Paroki Santo Yosef: jadwal misa, warta, sakramen, kegiatan, dan informasi pelayanan umat.',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      siteName: 'Paroki Santo Yosef',
    },
  },
})
