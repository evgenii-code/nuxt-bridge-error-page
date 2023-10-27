<template>
  <div>
    <h1>Index page</h1>

    <p v-if="pending">Loading...</p>

    <p v-else-if="data">{{ data.title }}</p>

    <p v-else-if="error">Error - {{ error }}</p>
  </div>
</template>

<script setup>
const { $axios, nuxt2Context } = useNuxtApp()
const { data, error, pending } = useLazyAsyncData('fetch-todos', () =>
  $axios.$get('https://jsonplaceholder.typicode.com/todos/-1')
)

if (error.value) {
  // I use here `nuxt2Context.error` because
  // for some reason `showError` doesn't work
  nuxt2Context.error({
    message: 'Some error',
    statusCode: 500,
  })
}
</script>
