<template>
  <hr />
  <img src="~/assets/img/youtube.png" alt="YouTube" width="60" />

  <div>
    <button @click="fetchHandler">Fetch</button>
    <div v-if="isVisible">
      <span v-if="isPending">Loading</span>

      <template v-else>
        <div v-for="mountain in mountains">
          <div>Title: {{ mountain.title }}</div>
          <div>Height: {{ mountain.height }}</div>
          <div>
            <img :src="mountain.image" alt="alt" width="280" />
          </div>
        </div>
      </template>
    </div>
  </div>
  <hr />
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { Mountain } from '~/types/Mountain'

const mountains: Ref<Mountain[] | null> = ref(null)
const isVisible = ref(false)
const isPending = ref(true)
async function fetchHandler() {
  isVisible.value = true

  const url = 'https://api.nuxtjs.dev/mountains'
  const { data, pending } = await useFetch<Mountain[]>(url)
  isPending.value = pending.value
  mountains.value = data.value
}
</script>
