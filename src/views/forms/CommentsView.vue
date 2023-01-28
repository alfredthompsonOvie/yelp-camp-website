<template>
	<div class="container">
		<MainNav />

		<form class="form" @submit.prevent="submit">
			<fieldset class="form__contents">
				<legend class="form__title">Add New Comment</legend>

				<BaseTextArea
					label="Description"
					name="description"
					placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
					v-model="description"
					:error="errors.description"
				/>
				<div>{{ error }}</div>
				<button 
				type="submit" 
				class="submit"
				:disabled="isPending"
				>Post Comment</button>
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

import getUser from "@/composables/getUser";


import { useUserIdStore } from "@/stores/userId"

import useAddComments from "@/composables/useAddComments";
import { ref } from "vue";

export default {
	name: "CommentsView",
	components: {
		MainNav,
		BaseTextArea,
	},
	setup() {
		const router = useRouter();
		const { user } = getUser();

		const store = useUserIdStore();
		console.log(store.userId);
		const { error, addComments } = useAddComments();

		const isPending = ref(false);

		const schema = object({
			description: string().required(),
		});

		const { handleSubmit, errors } = useForm({
			validationSchema: schema,
		});

		const { value: description } = useField("description");

		const submit = handleSubmit(async (values) => {
			isPending.value = true;
			const details = {
				name: user.value.displayName,
				description: values.description,
			}
			console.log(details);

			await addComments("users", store.userId, details)
			isPending.value = false;
			if (!error.value) {
				router.push({ name: "CampDetailsView", params: { id: store.userId} });
			}
		});
		return {
			submit,
			description,
			errors,
			error,
			isPending,
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
	.form,
	.testimonial {
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
