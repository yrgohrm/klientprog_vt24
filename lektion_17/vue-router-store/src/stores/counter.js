import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment(value) {
      this.count += value
    }
  },
  getters: {
    double(state) {
      return state.count * 2
    }
  }
})
