<script setup>
import { mapStores } from 'pinia'
import { useJokesStore } from '@/stores/jokes'
</script>

<template>
  <main class="flex flex-col gap-2 sm:grid sm:grid-cols-2 
           md:grid-cols-3 lg:grid-cols-4">
    <div v-for="joke of jokesStore.allJokes" class="flex items-center gap-2 text-xl hover:text-cyan-500 hover:bg-slate-100">
      <input type="checkbox" :checked="jokesStore.selectedIndices.has(joke.i)" @change="selectJoke" :data-index="joke.i">
      <div>{{ joke.joke }}</div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    ...mapStores(useJokesStore)
  },
  methods: {
    selectJoke(event) {
      const index = Number(event.target.dataset.index)
      const checked = event.target.checked

      if (checked) {
        this.jokesStore.selectJoke(index)
      }
      else {
        this.jokesStore.deselectJoke(index)
      }
      // do stuff
    }
  }
}
</script>