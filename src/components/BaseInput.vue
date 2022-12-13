<template>
	<div class="form__control">
		
		<label :for="uuid" class="label"> {{ label }} </label>

		<input
			v-bind="$attrs"
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			:aria-describedby="error ? `${uuid}-error` : null"
			:aria-invalid="error ? true : null"
			:id="uuid"
			:class="[{ input__error: error }, className]"
		/>
		<p
			v-if="error"
			class="errorMessage"
			:id="`${uuid}-error`"
			aria-live="assertive"
		>
			{{ error }}
		</p>
	</div>
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
		className: {
			type: String,
			default: "",
		}
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
.form__control {
	background-color: transparent;
	width: 100%;
	margin-top: 0.5em;
	border: none;
}
.form__control input {
	width: 100%;
	padding: 1em;
	padding-left: 3em;
	border-radius: 5px;
}
.errorMessage {
	color: red;
	z-index: 99;
	font-size: .9rem;
}
label.label {
	font-size: 1rem;
	margin-bottom: .3em;
	display: inline-block;
}
input::placeholder {
	color: lightslategray;
}
input.search {
	flex: 2;
	background-color: #fff;
	padding-left: 2.5em;
	position: relative;
	z-index: 1;
	border: 1px solid rgba(0, 0, 0, 0.2);
	margin-bottom: 0.2em;
	font-size: 1.1rem;
	height: 100%;
}
input.input--addCamp {
	border: 0;
	background-color: #eee;
	padding: 1.2em 1.5em;
}
/* textarea {
	width: 100%;
	margin-top: 0.5em;
	background-color: #eee;
	border: none;
	border-radius: 5px;
	padding: 1em;
	line-height: 1.5;
} */

input.input__error {
	border: 2px solid red;
}
/* ======================================== */
/* ======================================== */
/* ======================================== */
/* ======================================== */
/* ======================================== */
@media (min-width: 580px) {
	/* input + input {
		margin-left: 1em;
	} */

	/* input {
		margin-top: 0;
	} */
	.search {
    margin-top: 0;
	}
}
</style>
