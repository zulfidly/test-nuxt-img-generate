// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["/assets/style.css"],
  // image: {
  //   storyblok: {
  //     baseURL: 'https://a.storyblok.com'
  //   }
  // }
});
