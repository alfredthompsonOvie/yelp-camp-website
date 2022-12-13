<template>
	<div class="container">
		<!-- 1 -->
		<!-- 1.1 HEADER-->
		<MainNav />
		<!-- 1.2 CONTENTS-->
		<main class="main">
			<form class="form ">
				<fieldset class="form-contents form__contents">
					<legend class="form__title">Add New Campground</legend>
				
					<BaseInput
						label="Campground Name"
						placeholder="Seven Sisters Waterfall"
						className="input--addCamp"
						type="text"
						name="campgroundName"
					/>

					<BaseInput
						label="Price"
						placeholder="&dollar;149"
						className="input--addCamp"
						type="number"
						name="price"
					/>

					<BaseInput
						label="Image"
						placeholder="www.thepinoytravelter.com/2018/01/mt-ulap-diy-dayhike.html"
						className="input--addCamp"
						name="image"
					/>

					<div class="form-control form__group">
						<label for="description">Description</label>
						<textarea
							name="description"
							id="description"
							cols="30"
							rows="10"
							placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-meter tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjordan in Stranda Municipality in More og Romsdal county. Norway."
						></textarea>
					</div>

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
import BaseInput from "../../components/BaseInput.vue";
export default {
	name: "AddCampgroundView",
	components: {
		MainNav,
		BaseInput,
	},
	setup() {
		return {};
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
