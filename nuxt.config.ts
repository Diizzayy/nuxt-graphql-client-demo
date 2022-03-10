import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  buildModules: ['nuxt-graphql-client'],

  publicRuntimeConfig: {
    GQL_HOST: 'https://api.spacex.land/graphql',
  },
});
