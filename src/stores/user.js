import { ref, computed } from 'vue'

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // state
  const isLoggedIn = ref(false)
  const currentUser = ref(null)
  
  // getter
  const isUserLoggedIn = computed(() => {
    return isLoggedIn
  })
  
  // actions
  function logUserIn(user) {
    isLoggedIn.value = true;
    currentUser.value = user
  }
  function logUserOut() {
    isLoggedIn.value = false
    currentUser.value = null
  }

  return {
    isUserLoggedIn,
    logUserIn,
    logUserOut,
    currentUser
  }
})
