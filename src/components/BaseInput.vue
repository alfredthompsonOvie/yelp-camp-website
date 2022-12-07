<template>
  <label :for="uuid">{{ label }}: </label>
  <input 
  v-bind="$attrs"  
  :placeholder="placeholder"
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
  :aria-describedby="error ? `${uuid}-error` : null"
  :aria-invalid="error ? true : null"
  :id="uuid"
  >
  <p
  v-if="error"
  class="errorMessage"
  :id="`${uuid}-error`"
  aria-live="assertive"
  >
  {{ error }}
  </p>
</template>

<script>
import UUID from "../features/UniqueID"
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: ""
    }
    
  },
  setup () {
    const uuid = UUID().getID()

    return {
      uuid 
    }
  }
}
</script>

<style scoped>

</style>