// import { ref, computed } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
export const useUserStore = defineStore('User', () => {
  const login = ref(false)
  
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return {
    login,
    // doubleCount,
    // increment
  }
})
