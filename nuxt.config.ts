// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/sitemap", "@nuxt/content", "@nuxt/image"],
  hooks: {
    async "prerender:routes"(ctx) {
      ctx.routes.add('/partner/partner1');
      ctx.routes.add('/partner/partner.2');
      ctx.routes.add('/partner/partner..3..2.1');
      console.log("ctx", ctx)
    },
  },
  site: {
    url: "https://example.com",
  },
})
