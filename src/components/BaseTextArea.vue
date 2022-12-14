<template>
	<div class="form__control--textArea">
		<label :for="label">{{ label }}</label>
		<textarea
      v-bind="attrs"
			:id="label"
			cols="30"
			rows="10"
			:placeholder="placeholder"
		></textarea>
	</div>
</template>

<script>
export default {
  name: "BaseTextArea",
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
