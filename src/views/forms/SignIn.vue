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
					label="Email"
					placeholder="johndoe_91@gmail.com"
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
				:disabled="isPending">Login</button>
			</fieldset>

			<p class="account">
				Not a user yet?
				<RouterLink :to="{ name: 'SignUp' }">Create an account</RouterLink>
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

import useLogin from "@/composables/useLogin";

export default {
	name: "SignIn",
	components: {
		SubNav,
		BaseInput,
	},
	setup() {
		const router = useRouter();
		// const user = useUserStore();
		const { error, isPending, login } = useLogin();
		// get displayName from ^ and store it in the store, OR JUST DO IT DIRECTLY FROM THE STORE USING THE GETUSER COMPOSABLE

		// validate on form level first create a validation schema
		const schema = object({
			email: string().required().email(),
			// check yup for a .password() 
			password: string().required(),
		});

		const { handleSubmit, errors } = useForm({
			validationSchema: schema,
		});

		const { value: email } = useField("email");
		const { value: password } = useField("password");


		async function submissionHandler(values) {
			await login(values.email, values.password)

			if (!error.value) {
				router.push({ name: "campgrounds" })
			}
		}

		const submit = handleSubmit(submissionHandler);

		return {
			submit,
			errors,
			error,
			email,
			password,
			isPending
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
