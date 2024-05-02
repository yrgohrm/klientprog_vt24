import { reactive } from 'vue'

export const store = reactive({
  _count: 0,
  get() {
    return this._count
  },
  increment(value) {
    if (value < 1) {
      throw new Error("sluta med det!")
    }

    this._count += value
  }
})
