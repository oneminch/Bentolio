import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      id: "app"
    },
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }]
    }
  },

  build: {
    transpile: ["gsap"]
  },

  colorMode: { classSuffix: "" },

  compatibilityDate: "2025-05-15",

  css: ["app/assets/css/main.css"],

  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "nuxt-og-image"
  ],

  routeRules: {
    "/*": { prerender: true }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
