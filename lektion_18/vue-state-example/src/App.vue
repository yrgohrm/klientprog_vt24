<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { mapStores } from 'pinia'
import { useJokesStore } from '@/stores/jokes'
</script>

<template>
  <header>
    <div class="p-6">
      <nav class="flex gap-2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="container bg-slate-200 mx-auto"/>
</template>

<script>
export default {
  computed: {
    ...mapStores(useJokesStore)
  },
  created() {
    this.jokesStore.init()
  }
}
</script>

<style scoped>

</style>
