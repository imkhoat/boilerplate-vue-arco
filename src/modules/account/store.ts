import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'auth',
  state: () => ({
    user: 0
  }),
  getters: {
    doubleCount: (state) => state.user * 2
  },
  actions: {
    increment() {
      this.user++
    }
  }
})
