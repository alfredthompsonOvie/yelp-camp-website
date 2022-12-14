<template>
	<div class="container">
		<MainNav />

		<form class="form" @submit.prevent="submit">
			<fieldset class="form__contents">
				<legend class="form__title">
					Add New Comment
				</legend>

				<BaseTextArea 
						label="Description"
						name="description"
						placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
						v-model="description" 
						:error="errors.description"
						/>

				<button type="submit" class="submit">Post Comment</button>
			</fieldset>
		</form>
	</div>
</template>

<script>
import MainNav from "@/components/navigation/MainNav.vue";
import BaseTextArea from "@/components/BaseTextArea.vue";

import { useField, useForm } from "vee-validate";
import { object, string } from "yup";

import { useRouter } from "vue-router";

export default {
	name: "SignUp",
	components: {
		MainNav,
		BaseTextArea,
	},
	setup() {
		const router = useRouter();

		const schema = object({
			description: string().required()
		});

		const { handleSubmit, errors } = useForm({
			validationSchema: schema
		});

		const { value: description } = useField('description');

		const submit = handleSubmit(values => {
			console.log(values);
			router.push({ name: "CampDetailsView"})
		})
		return {
			submit,
			description,
			errors,
		};
	},
};
</script>

<style scoped>
.form {
	padding: 0 1.5em;
	margin: 3em 0; 
	width: 100%;
}
.form__contents {
	margin-inline: auto;
}
@media (min-width: 768px) and (max-width: 991px) {
	.form, .testimonial {
		padding-inline: 3em;
	}
}
@media (min-width: 992px) {
	.form {
		grid-row: 2;
		grid-column: 2/5;
		align-self: center;
	}
}
</style>

