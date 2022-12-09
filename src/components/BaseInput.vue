<template>
	<label :for="uuid">{{ label }} </label>
	<input
		v-bind="$attrs"
		:placeholder="placeholder"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		:aria-describedby="error ? `${uuid}-error` : null"
		:aria-invalid="error ? true : null"
		:id="uuid"
	/>
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
import UUID from "../features/UniqueID";
export default {
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
			type: [String, Number],
			default: "",
		},
		error: {
			type: String,
			default: "",
		},
	},
	setup() {
		const uuid = UUID().getID();

		return {
			uuid,
		};
	},
};
</script>

<style scoped>
label {
	font-size: 1.1rem;
	margin-bottom: 1em;
}
.form__control {
	width: 100%;
	padding: 1.2em;
	border-radius: 5px;
	font-size: 1rem;
	margin-top: 0.5em;
	border: none;
	background-color: #eee;
	background-color: #fff;
}
input::placeholder {
	color: lightslategray;
}
.search {
	padding-left: 3em;
}
textarea {
	width: 100%;
	margin-top: 0.5em;
	background-color: #eee;
	border: none;
	border-radius: 5px;
	padding: 1em;
	line-height: 1.5;
}
input[type="submit"],
.submit {
	background-color: black;
	color: #eee;
	cursor: pointer;
	transition: all 0.3s ease-out;
}
input[type="submit"]:hover,
.submit:hover {
	background-color: transparent;
	border: 1px solid black;
	color: #000;
}

/* ======================================== */
/* ======================================== */
/* ======================================== */
/* ======================================== */
/* ======================================== */
@media (min-width: 580px) {
	input + input {
		margin-left: 1em;
	}

	input {
		margin-top: 0;
	}
	.search {
		flex: 2;
		background-color: #fff;
		padding-left: 2.5em;
		z-index: 1;
    margin-top: 0;
	}
}
.search {
	flex: 2;
	background-color: #fff;
	padding-left: 2.5em;
	position: relative;
	z-index: 1;
	border: 1px solid rgba(0, 0, 0, 0.2);
	margin-bottom: 0.2em;
}
</style>
