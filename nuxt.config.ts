// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-graphql-client"],

  "graphql-client": {
    codegen: {
      avoidOptionals: true
    }
  },

  runtimeConfig: {
    public: {
      GQL_HOST: 'https://spacex-api-2gl6xp7kua-ue.a.run.app/query'
    }
  }
})
