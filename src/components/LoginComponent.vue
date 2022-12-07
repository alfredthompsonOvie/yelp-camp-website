<template>
  <div>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const loginDetails = ref({
      username: "",
      password: "",
    })

    return {
      loginDetails
    }
  }
}
</script>

<style scoped>

</style>