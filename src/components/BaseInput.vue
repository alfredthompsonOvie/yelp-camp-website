<template>
	<div class="form__group">
		
		<label :for="uuid" class="label"> {{ label }} </label>

		<input
			v-bind="$attrs"
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			:aria-describedby="error ? `${uuid}-error` : null"
			:aria-invalid="error ? true : null"
			:id="uuid"
			:class="[className, { input__error: error }]"
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
	name: "BaseInput",
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
.form__group {
	background-color: transparent;
	width: 100%;
	
	border: none;
}
/* .form__group + .form__group {
	margin-top: 0.5em;
} */
.form__group input {
	width: 100%;
	padding: 1em;
	padding-left: 3em;
	border-radius: 5px;
}
label.label {
	font-size: 1rem;
	margin-bottom: .6em;
	display: inline-block;
}
input::placeholder {
	color: lightslategray;
}
.search {
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

input.input__error {
	border: 2px solid red;
}
.form__group + .form__group {
	margin-top: 1.2em;
}
/* ======================================== */
/* ======================================== */
/* ======================================== */
/* ======================================== */
/* ======================================== */
@media (min-width: 580px) {
	.form__group {
	margin-top: 0em;
}
	.search {
    margin-top: 0;
	}
}
</style>
