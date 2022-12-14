<template>
	<div class="container">
		<SubNav />

		<section class="camp-contents ">
			<form class="form">
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
					/>
					<BaseInput
						label="Password"
						placeholder="Choose Password"
						className="input--addCamp"
						type="password"
						name="password"
					/>
				</fieldset>

				<button type="submit" class="submit">Create an account</button>

				<p class="account">
					Already a user?
					<RouterLink :to="{ name: 'SignIn' }">Sign in</RouterLink>
				</p>
			</form>
		</section>

		<section class="camp-illustration camp-illustration-testimonial">
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

export default {
	name: "SignUp",
	components: {
		SubNav,
		BaseInput,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
