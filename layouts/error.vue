<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script setup>
defineProps(['error'])
</script>

<style scoped>
div {
  background-color: #333;
  color: #fff;
  min-height: 100vh;
}
</style>
