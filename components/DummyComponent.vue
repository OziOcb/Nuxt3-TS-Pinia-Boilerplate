<template>
  <hr />
  <img src="~/assets/img/youtube.png" alt="YouTube" width="60" />

  <div>
    <button @click="fetchHandler">Fetch</button>
    <div v-if="isVisible">
      <span v-if="isPending">Loading</span>

      <template v-else>
        <div>Title: {{ mountain?.title }}</div>
        <div>Height: {{ mountain?.height }}</div>
        <div>
          <img :src="mountain?.image" alt="alt" width="280" />
        </div>
      </template>
    </div>
  </div>
  <hr />
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { Mountain } from '~/types/Mountain'

const mountain: Ref<Mountain | null> = ref(null)
const isVisible = ref(false)
const isPending = ref(true)
async function fetchHandler() {
  isVisible.value = true

  const url = 'https://api.nuxtjs.dev/mountains/aconcagua'
  const { data, pending } = await useFetch<Mountain>(url, {
    pick: ['title', 'height', 'image'],
  })

  console.log('-\n--\n data.value \n >', data.value, '\n--\n-')

  isPending.value = pending.value
  mountain.value = data.value
}
</script>
