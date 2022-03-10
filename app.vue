<template>
  <div>
    <h2>Starlink Launches</h2>

    <p v-for="(entry, i) of data?.launches" :key="entry.id">
      {{ i + 1 }}. Mission Name: {{ entry.mission_name }} ({{
        entry.launch_year
      }})
    </p>
  </div>
</template>

<script lang="ts" setup>
const { data, error } = await useAsyncData('starlink', () => GqlLaunches());
</script>
