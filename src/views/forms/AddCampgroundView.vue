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
					<!--! IMAGE -->
					<!-- <BaseInput
						label="Image"
						placeholder="www.thepinoytravelter.com/2018/01/mt-ulap-diy-dayhike.html"
						className="input--addCamp"
						type="file"
						name="image"
						:error="errors.image"
						v-model="image"
						/> -->
					<div class="form__control">
						<label for="image">image: </label>
						<input
							className="input--addCamp"
							type="file"
							id="image"
							name="image"
							@change="handleChange($event)"
						/>
						<!-- accept="image/png, image/jpeg" -->

						<p>{{ fileError }}</p>
						<p>{{ errors.image }}</p>
					</div>

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
import { object, string, number, mixed } from "yup";

import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
	name: "AddCampgroundView",
	components: {
		MainNav,
		BaseInput,
		BaseTextArea,
	},
	setup() {
		const router = useRouter();
		const fileError = ref(null);
		const AllowedFileTypes = ref(
			[
				"image/png",
				"image/jpg",
				"image/jpeg",
				"image/svg",
				"image/webp",
			]);

		// function isValidFileType(fileName, fileType) {
		// 	return (
		// 		fileName &&
		// 		validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
		// 	);
		// }
		function isValidFileType(fileType) {
			console.log(fileType);
			return  AllowedFileTypes.value.includes(fileType)
		}

		// validationSchema
		const schema = object().shape({
			campgroundName: string().required("This field is required"),
			price: number().required("This field is required"),

			image: mixed()
			.required("This field is required")
				.test(
					"isValidType",
					"Please provide a valid image type (.png, .jpg, .jpeg, .svg, .webp)",
					value => isValidFileType(value?.type),
				),
			description: string().required("This field is required"),
		});

		const { handleSubmit, errors } = useForm({
			validationSchema: schema,
		});

		const { value: campgroundName } = useField("campgroundName");
		const { value: price } = useField("price");
		const { handleChange, value: image } = useField("image");
		const { value: description } = useField("description");

		const submit = handleSubmit((values) => {
			console.log("submited", values);
			// router.push({ name: "campgrounds" })
		});

		handleChange(($event) => {
			console.log($event);
		});

		return {
			submit,
			campgroundName,
			price,
			image,
			handleChange,
			description,
			errors,
			// value,
			fileError,
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
