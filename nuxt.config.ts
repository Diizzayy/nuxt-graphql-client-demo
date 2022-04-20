import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  buildModules: ['nuxt-graphql-client'],

  runtimeConfig: {
    public: {
      GQL_HOST: 'https://api.spacex.land/graphql',
    }
  }
});
