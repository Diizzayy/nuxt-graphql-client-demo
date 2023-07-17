<template>
  <div>
    <button @click="refresh()">
      Refresh
    </button>

    <p v-if="pending">
      pending
    </p>
    <pre v-else>
      {{ data || error }}
   </pre>
  </div>
</template>

<script lang="ts" setup>
const { data, error, pending, refresh } = await useAsyncGql({
  operation: 'ships',
  variables: { limit: 15 },
  options: {
    transform: (data) => data.ships.map((ship) => ship.name),
  }
})

if (error.value) {
  // eslint-disable-next-line no-console
  console.error(error.value)
}
</script>


