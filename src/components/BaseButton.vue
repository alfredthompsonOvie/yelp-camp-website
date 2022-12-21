<template>
<button
type="button"
class="btn"
>
{{ value }}
</button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  setup () {
    

    return {}
  }
}
</script>

<style scoped>

</style>