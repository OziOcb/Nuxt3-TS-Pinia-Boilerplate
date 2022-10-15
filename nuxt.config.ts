// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  css: ['@/assets/sass/styles/index.sass'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/sass/variables/_index.sass"\n',
        },
      },
    },
  },
})
