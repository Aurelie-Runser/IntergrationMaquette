// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // empecher Nuxt de préfixer les composants
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  modules: [
    "@nuxtjs/prismic",
    "@pinia/nuxt"
  ],
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },

  css: ["@/scss/main.scss"],

  runtimeConfig: {
    public: {
      apiRecetteUrl: "",
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/scss/foundations/_variables.scss";
                          @import "@/scss/foundations/_mixins.scss";
          `,
        },
      },
    },
  },
});
