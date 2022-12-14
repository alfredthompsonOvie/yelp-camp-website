<template>
	<div class="form__control--textArea">
		<label :for="label">{{ label }}</label>
		<textarea
			:id="label"
			cols="30"
			rows="10"
			:placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[{ input__error: error }]"
		></textarea>
    <p class="errorMessage">
      {{ error }}
    </p>
	</div>
</template>

<script>
export default {
  name: "BaseTextArea",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    error: {
			type: String,
			default: "",
		},
  },
	setup() {
		return {};
	},
};
</script>

<style scoped>

</style>
