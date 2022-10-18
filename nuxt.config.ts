import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    server: {
      proxy: {
        "/todo": {
          target: "http://127.0.0.1:8080",
          secure: false,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/todo/, ""),
        },
      },
    },
  },

  css: ["~/assets/css/shadow.css"],

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],
});
