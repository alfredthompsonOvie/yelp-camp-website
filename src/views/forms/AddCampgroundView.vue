<template>
	<div class="container">
		<!-- 1 -->
		<!-- 1.1 HEADER-->
		<MainNav />
		<!-- 1.2 CONTENTS-->
		<main class="main">
			<form class="form" @submit.prevent="submit">
				<fieldset class="form-contents form__contents">
					<legend class="form__title">Add New Campground</legend>
				
					<BaseInput
						label="Campground Name"
						placeholder="Seven Sisters Waterfall"
						className="input--addCamp"
						type="text"
						name="campgroundName"
						v-model="campgroundName"
						:error="errors.campgroundName"
					/>

					<BaseInput
						label="Price"
						placeholder="&dollar;149"
						className="input--addCamp"
						type="number"
						name="price"
						v-model="price"
						:error="errors.price"
					/>

					<BaseInput
						label="Image"
						placeholder="www.thepinoytravelter.com/2018/01/mt-ulap-diy-dayhike.html"
						className="input--addCamp"
						type="text"
						name="image"
						v-model="image"
						:error="errors.image"
					/>

					<BaseTextArea 
						label="Description"
						name="description"
						placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-meter tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjordan in Stranda Municipality in More og Romsdal county. Norway."
						v-model="description"
						:error="errors.description"
					/>

					<!-- button -->
					<button type="submit" class="submit">Add Campground</button>
				</fieldset>
			</form>
		</main>
		<footer class="footer">
			<RouterLink to="/">
				<img src="@/assets/images/Logo.svg" alt="yelpcamp logo" />
			</RouterLink>
		</footer>
	</div>
</template>

<script>
import MainNav from "@/components/navigation/MainNav.vue";

import BaseInput from "@/components/BaseInput.vue";
import BaseTextArea from "@/components/BaseTextArea.vue";

import { useField, useForm } from "vee-validate";
import { object, string, number } from "yup";

import { useRouter } from "vue-router"

export default {
	name: "AddCampgroundView",
	components: {
		MainNav,
		BaseInput,
		BaseTextArea
	},
	setup() {
		const router = useRouter();
		// validationSchema
		const schema = object({
			campgroundName: string().required(),
			price: number().required(),
			image: string().required(),
			description: string().required(),
		})

		const { handleSubmit, errors } = useForm({
			validationSchema: schema
		})

		const { value: campgroundName } = useField('campgroundName')
		const { value: price } = useField('price')
		const { value: image } = useField('image')
		const { value: description } = useField('description')

		const submit = handleSubmit(values => {
			console.log("submited", values);
			router.push({ name: "campgrounds" })

		})
		return {
			submit,
			campgroundName,
			price,
			image,
			description,
			errors
		};
	},
};
</script>

<style scoped>
main {
	padding: 0 1.5em;
}
/* .form {
	padding: 2em 0;
} */
.form {
	width: 100%;
}
.form__contents {
	max-width: 450px;
	margin-inline: auto;
}
@media (min-width: 768px) and (max-width: 991px) {
	main {
		padding: 0 3em;
	}
}
@media (min-width: 992px) {
	main {
		padding-inline: 0;
		grid-column: 2/5;
	}
	}
</style>
