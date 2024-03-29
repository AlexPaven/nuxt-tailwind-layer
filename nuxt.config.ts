import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// see https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [ '@nuxtjs/tailwindcss' ],
  devtools: { enabled: true },
  tailwindcss: {
    configPath: join(currentDir, 'tailwind.config.js'),
    cssPath: join(currentDir, './assets/css/tailwind.css'),
  }
})
