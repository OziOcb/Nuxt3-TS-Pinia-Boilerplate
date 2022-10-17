<template>
  <hr />
  <img src="~/assets/img/youtube.png" alt="YouTube" width="60" />

  <button @click="addNewPostHandler()">Add</button>
  <div v-for="post in posts" :key="post.id">
    {{ post.id }}. Title - {{ post.title }}
  </div>
  <hr />
</template>

<script setup lang="ts">
interface ResponseInterface {
  id: number
  title: string
  body: string
  userId: number
}

const { data: posts } = await useFetch<ResponseInterface[]>(
  'https://jsonplaceholder.typicode.com/posts'
)

async function addNewPostHandler() {
  try {
    const res = await $fetch<ResponseInterface>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        body: {
          title: 'foo ' + Math.floor(Math.random() * 100),
          body: 'bar',
          userId: 1,
        },
      }
    )

    posts.value?.unshift(res)
  } catch (e) {
    console.log(e)
  }
}
</script>
