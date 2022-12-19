<template>
	<div class="container">
		<SubNav />

		<form class="form" @submit.prevent="submit">
			<fieldset class="form__contents">
				<legend class="form__title">
					Start exploring camps from all around the world.
				</legend>

				<div v-if="error" class="firebase__error">
					{{ error }}
				</div>

				<BaseInput
					label="Username"
					placeholder="johndoe_91"
					className="input--addCamp"
					type="text"
					name="username"
					v-model="username"
					:error="errors.username"
				/>
				<BaseInput
					label="email"
					placeholder="johndoe_91@email.com"
					className="input--addCamp"
					type="email"
					name="email"
					v-model="email"
					:error="errors.email"
				/>
				<BaseInput
					label="Password"
					placeholder="Choose Password"
					className="input--addCamp"
					type="password"
					name="password"
					v-model="password"
					:error="errors.password"
				/>

				<button
					type="submit"
					class="submit"
					:class="{ isDisabled: isPending }"
					:disabled="isPending"
				>
					Create an account
				</button>
			</fieldset>

			<p class="account">
				Already a user?
				<RouterLink :to="{ name: 'SignIn' }">Sign in</RouterLink>
			</p>
		</form>

		<section
			class="camp-illustration camp-illustration-testimonial testimonial"
		>
			<div class="testimonial-content">
				<div class="testimonial-comment">
					<p>
						&OpenCurlyDoubleQuote;YelpCamp has honestly saved me hours of
						research time, and the camps on here are definitely well picked and
						added.&CloseCurlyDoubleQuote;
					</p>
				</div>
				<div class="testimonial-profile">
					<img
						src="@/assets/images/UserTestimonial.svg"
						alt="an image of a woman"
					/>
					<div class="profile-name">
						<h4>May Andrews</h4>
						<p>Professional Hiker</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import SubNav from "@/components/navigation/SubNav.vue";
import BaseInput from "@/components/BaseInput.vue";

import { useField, useForm } from "vee-validate";
import { object, string } from "yup";

import { useRouter } from "vue-router";

// import { useUserStore } from "@/stores/userStore";

import useSignup from "@/composables/useSignup";

// import getUser from "@/composables/getUser";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export default {
	name: "SignUp",
	components: {
		SubNav,
		BaseInput,
	},
	setup() {
		const router = useRouter();
		const { error, isPending, signup } = useSignup();
		// const { user } = getUser();

		const schema = object({
			username: string().required(),
			email: string().required().email(),
			password: string().required(),
		});

		const { handleSubmit, errors } = useForm({
			validationSchema: schema,
		});

		const { value: username } = useField("username");
		const { value: email } = useField("email");
		const { value: password } = useField("password");

		async function submissionHandler(values) {
			await signup(values.email, values.password);

			// await addDoc(collection(db, "users"), {
			// 	username: values.username,
			// 	email: values.email,
			// 	password: values.password,
			// 	// id: user.uid
			// });

			// =====================
			try {
				const docRef = await addDoc(collection(db, "users"), {
					username: values.username,
					email: values.email,
					password: values.password,
				});
				console.log("Document written with ID: ", docRef.id);
			} catch (e) {
				console.error("Error adding document: ", e);
			}
			// =====================

			if (!error.value) {
				console.log(values);
				// user.logUserIn(values.username);
				router.push({ name: "campgrounds" });
			}
		}

		const submit = handleSubmit(submissionHandler);

		return {
			username,
			email,
			password,
			error, // error from firebase
			errors, //errors from vee-validate
			submit,
			isPending,
		};
	},
};
</script>

<style scoped>
.form {
	padding: 0 1.5em;
	margin: 3em 0;
}
.submit {
	margin-top: 1.5em;
}
@media (min-width: 768px) and (max-width: 991px) {
	.form,
	.testimonial {
		padding-inline: 3em;
	}
}
@media (min-width: 992px) {
	.nav__bar {
		grid-row: 1;
		grid-column: 2;
	}
	.form {
		grid-row: 2;
		grid-column: 2;
		align-self: center;
	}
}
</style>
