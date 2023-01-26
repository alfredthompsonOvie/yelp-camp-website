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

					<BaseTextArea
						label="Description"
						name="description"
						placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-meter tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjordan in Stranda Municipality in More og Romsdal county. Norway."
						v-model="description"
						:error="errors.description"
					/>
					<div class="form__group">
						<label for="image" class="label">Image </label>
						<input
							class="input--addCamp"
							type="file"
							id="image"
							name="image"
							@change="handleChange($event)"
							:class="{ input__error: errors.image }"
							accept="image/png, image/jpeg, image/svg, image/webp"
						/>
						<p class="errorMessage">{{ errors.image }}</p>
					</div>

					<!-- button -->
					<button 
					type="submit" 
					class="submit"
					:disabled="isPending"
					:class="{ pending: isPending }"
					>Add Campground</button>
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

import getUser from "@/composables/getUser"
import useStorage from "@/composables/useStorage.js"
import useFirestore from "@/composables/useFirestore.js"
import { serverTimestamp } from "firebase/firestore";

export default {
	name: "AddCampgroundView",
	components: {
		MainNav,
		BaseInput,
		BaseTextArea,
	},
	setup() {
		const router = useRouter();
		const isPending = ref(null);

		const AllowedFileTypes = ref([
			"image/png",
			"image/jpg",
			"image/jpeg",
			"image/svg",
			"image/webp",
		]);

		const { url, error, filePath, uploadImage } = useStorage();
		const { sendData } = useFirestore();

		const { user } = getUser()

		function isValidFileType(fileType) {
			console.log(fileType);
			return AllowedFileTypes.value.includes(fileType);
		}

		// validationSchema
		const schema = object({
			campgroundName: string().required("This field is required"),
			price: number().required("This field is required"),
			description: string().required("This field is required"),
			image: mixed()
				.required("This field is required")
				.test({
					name: "isValidType",
					exclusive: true,
					message:
						"Please provide a valid image type (.png, .jpg, .jpeg, .svg, .webp)",
					test: (image) => isValidFileType(image?.type),
				}),
		});

		const { handleSubmit, errors } = useForm({
			validationSchema: schema,
		});

		const { value: campgroundName } = useField("campgroundName");
		const { value: price } = useField("price");
		const { value: description } = useField("description");
		const { handleChange, value: image } = useField("image");

		const submit = handleSubmit(async (values) => {
			// console.log("submited", values);
			// console.log("submited image", values.image);
			isPending.value = true;
			await uploadImage(values.image)
			// console.log(url.value)

			const sendingData = await sendData({
				title: values.campgroundName,
				price: values.price,
				url: url.value,
				description: values.description,
				submittedBY: user.value.displayName,
				createdAt: serverTimestamp(),
				comments: [],
			})
			console.log(sendingData);
			isPending.value = false
			router.push({ name: "campgrounds" })
		});

		// console.log(user);

		return {
			submit,
			campgroundName,
			price,
			image,
			handleChange,
			description,
			errors,
			isPending,
		};
	},
};
</script>

<style scoped>
main {
	padding: 0 1.5em;
}
.form {
	width: 100%;
}
.form__contents {
	max-width: 450px;
	margin-inline: auto;
}

.form__group {
	background-color: transparent;
	width: 100%;
	margin-top: 0.5em;
	border: none;
}
.form__group input {
	width: 100%;
	padding: 1em;
	padding-left: 3em;
	border-radius: 5px;
}
label.label {
	font-size: 1rem;
	margin-bottom: 0.6em;
	display: inline-block;
}
input.input--addCamp {
	border: 0;
	background-color: #eee;
	padding: 1.2em 1.5em;
}
input[type="file"] {
	border: 0;
}

input.input__error {
	border: 2px solid red;
}
.form__group + .form__group {
	margin-top: 1.2em;
}

.pending {
	cursor: not-allowed;

}
@media (min-width: 580px) {
	.form__group {
		margin-top: 0em;
	}
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
