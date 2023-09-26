// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:['~/assets/css/main.css'],
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&family=Poppins:wght@300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500&display=swap",
    },
],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@pinia/nuxt',
  ]
})
