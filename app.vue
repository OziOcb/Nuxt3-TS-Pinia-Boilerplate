<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Meta } from '@zhead/schema'
const appConfig = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appConfig.title}` : appConfig.title
  },
  meta: [{ name: 'description', content: appConfig.description }] as Meta[],
})
</script>

<style lang="scss">
body {
  background-color: $color-bg;
  color: $color-text;
}
</style>
