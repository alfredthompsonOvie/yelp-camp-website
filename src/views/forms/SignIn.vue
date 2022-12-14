<template>
	<div class="container">
		<SubNav />

		<form 
		class="form"
		@submit.prevent="submit"
		>
			<fieldset class="form__contents">
				<legend class="form__title">
					Start exploring camps from all around the world.
				</legend>

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
					label="Password"
					placeholder="Choose Password"
					className="input--addCamp"
					type="password"
					name="password"
					v-model="password"
					:error="errors.password"
				/>

				<button type="submit" class="submit">Login</button>
			</fieldset>


			<p class="account">
				Not a user yet?
				<RouterLink :to="{ name: 'SignUp' }">Create an account</RouterLink>
			</p>
		</form>

		<section class="camp-illustration camp-illustration-testimonial testimonial">
			<div class="testimonial-content">
				<div class="testimonial-comment">
					<p>
						&OpenCurlyDoubleQuote;YelpCamp has honestly saved me hours of
						research time, and the camps on here are definitely well picked and
						added.&CloseCurlyDoubleQuote;
					</p>
				</div>
				<div class="testimonial-profile">
					<img src="@/assets/images/UserTestimonial.svg" alt="an image of a woman" />
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

import { useUserStore } from "@/stores/user"

export default {
	name: "SignUp",
	components: {
		SubNav,
		BaseInput,
	},
	setup() {
		const router = useRouter();
		const user = useUserStore();

		// validate on form level first create a validation schema
		const schema = object({
			username: string().required(),
			password: string().required()
		})

		const { handleSubmit, errors } = useForm({
			validationSchema: schema
		})

		const { value: username } = useField('username')
		const { value: password } = useField('password')

		const submit = handleSubmit(values => {
			console.log("login  " + values);

			user.logUserIn(values.username)

			console.log(user.isUserLoggedIn);
			router.push({ name: "campgrounds" })
		})
		return {
			submit,
			errors,
			username,
			password
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
	.form, .testimonial {
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
