<template>
  <section>
    <p>This page will be displayed at the /about route.</p>

    <div>count: {{ countStore.count }}</div>
    <div>double count: {{ countStore.doubleCount }}</div>
  </section>
</template>

<script setup lang="ts">
import { Meta } from '@zhead/schema'
const countStore = useCountStore()

useHead({
  title: 'About Page',
  meta: [{ name: 'description', content: 'About me page!' }] as Meta[],
})
</script>
