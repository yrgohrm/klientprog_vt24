import { defineStore } from "pinia"
import DadJokes from "@/services/DadJokes"

export const useJokesStore = defineStore('jokes', {
    state: () => ({
        allJokes: [], // lista av objekt
        selectedIndices: new Set() // set av index (tal)
    }),
    actions: {
        async init() {
            this.allJokes = []
            for (let i = 0; i < 5; ++i) {
                const joke = await DadJokes.random()
                this.allJokes.push({i, joke})
            }
        },
        selectJoke(index) {
            this.selectedIndices.add(index)
        },
        deselectJoke(index) {
            this.selectedIndices.delete(index)
        }
    }
})