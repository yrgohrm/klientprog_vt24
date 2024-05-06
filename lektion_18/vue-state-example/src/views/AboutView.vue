<script setup>
import { mapStores } from 'pinia'
import { useJokesStore } from '@/stores/jokes';
</script>

<template>
  <div class="about">
    <div v-for="joke of selectedJokes">
      {{  joke.joke }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ...mapStores(useJokesStore),
    selectedJokes() {
      const result = []
      const selected = Array.from(this.jokesStore.selectedIndices.values())
      // sort with comparator function since default behaviour is to
      // convert data to string and compare strings
      const sorted = selected.toSorted((a, b) => a - b)
      
      for (const index of sorted) {
        result.push(this.jokesStore.allJokes[index])
      }

      return result
    }
  }
}
</script>

<style>

</style>
