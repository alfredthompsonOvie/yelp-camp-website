import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserIdStore = defineStore('userId', () => {
  const userId = ref('mario');
  function getUserID(id) {
    userId.value = id;
  }

  return { userId, getUserID }
})

