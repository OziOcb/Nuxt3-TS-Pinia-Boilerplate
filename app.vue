<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Meta } from '@zhead/schema'
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appConfig.title}` : appConfig.title
  },
  meta: [{ name: 'description', content: appConfig.description }] as Meta[],
})

console.log('-\n Runtime Config \n >', runtimeConfig, '\n-')
console.log('-\n NUXT_PUBLIC_API_BASE\n >', runtimeConfig.public.apiBase, '\n-')
if (process.server) {
  console.log('-\n NUXT_API_SECRET \n >', runtimeConfig.apiSecret, '\n-')
}
</script>
