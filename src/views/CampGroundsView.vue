<template>
	<div class="container">
		<MainNav class="nav-bar" />
		<main class="searchPageContents">
			<form 
			class="search-form form__search" 
			@submit.prevent="submit">
				<fieldset>
					<legend class="form__title">Welcome to YelpCamp!</legend>
					<p>
						view our hand-picked campgrounds from all over the world, or add
						your own.
					</p>

					<div class="form-control-search form__group--search">
						<BaseInput
							placeholder="Search for camps"
							class="search"
							v-model="search"
							type="search"
							name="search"
							:error="errors.search"
						/>

						<button type="submit" class="submit">Search</button>

						<img
							src="@/assets/images/SearchIcon.svg"
							alt="search icon"
							class="search__icon"
							:class="{ 'search__icon--error': errors.search }"
						/>
					</div>
					<RouterLink :to="{ name: 'AddCampgroundView' }" class="cta-addCamp"
						>Or add your own campground</RouterLink
					>
				</fieldset>
			</form>

			<div class="campgrounds">
				<div class="campground">
					<img
						class="campCard-img campground__img"
						src="@/assets/images/CampImages/HighQualityImages/Mount-Ulap.png"
						alt="an image of mount ulap"
					/>

					<h4 class="campCard-title campground__title">Mount Ulap</h4>
					<p class="campCard-details campground__details">
						One of the most famous hikes in Benguet is Mt Ulap in Itogon
					</p>
					<RouterLink
						:to="{ name: 'CampDetailsView', params: { id: 'Mount-Ulap' } }"
						class="campground__btn"
						data-camp="mount ulap"
						>View Campground</RouterLink
					>
				</div>
				<div class="campground">
					<img
						class="campCard-img campground__img"
						src="@/assets/images/CampImages/HighQualityImages/Calaguas-Island.jpg"
						alt="an image of Calaguas Islands"
					/>

					<h4 class="campCard-title campground__title">Calaguas Islands</h4>
					<p class="campground__details">
						A paradise of islands that can rival the white sand beauty of
						Boracay.
					</p>
					<RouterLink
						:to="{
							name: 'CampDetailsView',
							params: { id: 'Calaguas-Islands' },
						}"
						class="campground__btn"
						data-camp="Calaguas Islands"
						>View Campground</RouterLink
					>
				</div>
				<div class="campground">
					<img
						class="campCard-img campground__img"
						src="@/assets/images/CampImages/HighQualityImages/Onay-Beach.jpg"
						alt="an image of Onay Beach"
					/>

					<h4 class="campground__title">Onay Beach</h4>
					<p class="campground__details">
						This is one of the best beach camping sites, beautiful and pristine.
					</p>
					<a
						href="individualCampground.html"
						class="campground__btn"
						data-camp="Onay Beach"
						>View Campground</a
					>
				</div>
				<div class="campground">
					<img
						class="campCard-img campground__img"
						src="@/assets/images/CampImages/HighQualityImages/Seven-Sisters-Waterfall.jpg"
						alt="an image of Seven Sisters Waterfall"
					/>

					<h4 class="campground__title">Seven Sisters Waterfall</h4>
					<p class="campground__details">
						The Seven Sisters is the 39th tallest waterfall in Norway.
					</p>
					<a
						href="individualCampground.html"
						class="campground__btn"
						data-camp="Seven Sisters Waterfall"
						>View Campground</a
					>
				</div>
				<div class="campground">
					<img
						class="campCard-img campground__img"
						src="@/assets/images/CampImages/HighQualityImages/Latik-Riverside.jpg"
						alt="an image of Latik Riverside"
					/>

					<h4 class="campground__title">Latik Riverside</h4>
					<p class="campground__details">
						Philippines is one of the most dazzling countries in all of Asia.
					</p>
					<a
						href="individualCampground.html"
						class="campground__btn"
						data-camp="Latik Riverside"
						>View Campground</a
					>
				</div>

				<div class="campground">
					<img
						class="campCard-img campground__img"
						src="@/assets/images/CampImages/HighQualityImages/Buloy-Springs.jpg"
						alt="an image of Buloy Springs"
					/>

					<h4 class="campground__title">Buloy Springs</h4>
					<p class="campground__details">
						This is one of the best beach camping sites, beautiful and pristine.
					</p>
					<a
						href="individualCampground.html"
						class="campground__btn"
						data-camp="Buloy Springs"
						>View Campground</a
					>
				</div>
			</div>
		</main>
		<footer class="footer">
			<RouterLink :to="{ name: 'home' }">
				<img src="@/assets/images/Logo.svg" alt="site logo" />
			</RouterLink>
		</footer>
	</div>
</template>

<script>
// import { ref, onMounted } from "vue";
import MainNav from "@/components/navigation/MainNav.vue";
import BaseInput from "@/components/BaseInput.vue";

import { useField, useForm } from "vee-validate";
// import * as yup from "yup";
import { object, string } from "yup";

export default {
	name: "CampGroundsView",
	components: {
		MainNav,
		BaseInput,
	},
	setup() {
		// Define a validation schema
		const schema = object({
			// email: yup.string().required().email(),
			// name: yup.string().required(),
			// password: yup.string().required().min(8),
			search: string().required()
		});
		// ===================================


		// Create a form context with the validation schema
		const { handleSubmit, errors } = useForm({
			validationSchema: schema,
		});

		const{ value: search } = useField("search")

		const submit = handleSubmit(values => {
			console.log("submit", values);
		})
		return {
			search,
			errors,
			submit
		};
	},
};
</script>

<style scoped>
main {
	padding: 0 1.5em;
}
.form__search .form-contents {
	max-width: 400px;
}
.search-header {
	max-width: 400px;
}
.search-header p {
	margin-bottom: 1em;
}

.form__group--search {
	position: relative;
	margin-bottom: 1.7em;
}

.search__icon {
	position: absolute;
	top: 15%;
	left: 15px;
	width: 1.3em;
	z-index: 2;
}
.search__icon--error {
	top: 13%
}
/*! ============================================== */
/** ============================================== */
/**============================================== */
/* ============================================== */
/* ============================================== */
/* ============================================== */
/* ============================================== */
/* ============================================== */
/* ============================================== */
/* ============================================== */
.form__search {
	background-color: #eee;
	padding: 2em 1.5em;
	/* border-radius: 6px; */
}
fieldset {
	max-width: 450px;
}
.form__title {
	font-weight: 800;
	margin-bottom: 0.4em;
	font-size: 2.46rem;
	font-size: clamp(1.7rem, 6.6vw, 2.46rem);
	/* font-size: clamp(2rem, 8vw, 2.46rem); */
}
.form__group {
	position: relative;
	z-index: 1;
	margin-top: 1em;
}

.submit {
	margin-top: 1em;
}
.fade-up-enter-from,
.fade-up-leave-to {
	/* transform: translateY(10px) rotate(45deg); */
	opacity: 0;
}
.fade-up-enter-active,
.fade-up-leave-active,
.fade-up-move {
	transition: all 0.3s ease;
}

/* !campgrounds cards=========================== */
/* !campgrounds cards=========================== */
/* !campgrounds cards=========================== */
/* !campgrounds cards=========================== */
.campgrounds {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 320px));
	grid-gap: 2em;
	padding: 3.5em 0;
	justify-content: center;
}
.campground {
	padding: 0.8em;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	transition: all 0.3s;
	border-radius: 5.5px;
}
/* .campground:hover {
	transform: scale(1.02);
} */

.campground__img {
	width: 100%;
	border-radius: 5px;
}
.campground * + * {
	margin-top: 1em;
}
.campground__details {
	margin-bottom: 1.2em;
}
.campground__btn {
	display: block;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
	padding: 1em;
	text-align: center;
	text-decoration: none;
	font-weight: 900;
	color: #444;
	margin-top: auto;
	width: 100%;
	transition: all 0.3s;
	border-radius: 5px;
}
.campground__btn:hover {
	transform: translateY(-4px);
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
	/* transform: translateZ(20px); */
}
@media (min-width: 580px) {
	.form__search {
		background-color: #eee;
		padding: 3em 2em;
	}
	.form__group--search {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		margin-top: 1.2em;
	}
	.form__group--search .submit {
		margin-top: 0;
		margin-left: 1em;
		flex: 1;
	}
	.search__icon, .search__icon--error {
		top: 18px;
	}
	.campground__img {
		height: 180px;
	}
}

@media (min-width: 595px) {
	.campgrounds {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		justify-content: space-between;
		grid-gap: 2em;
		padding: 3.5em 0;
	}
}
/*!TODO edit this remove .nav-bar */
@media (min-width: 768px) and (max-width: 991px) {
	.nav-bar,
	main,
	.footer {
		padding: 0 3em;
	}
	.form__search {
		border-radius: 6px;
	}
}
@media (min-width: 992px) {
	.nav-bar {
		padding-inline: 0;
	}
	main {
		padding: 0;
	}
	.form__search {
		width: 100%;
		border-radius: 6px;
		grid-row: 1;
		grid-column: 1/-1;
	}
	.campgrounds {
		padding-top: 2em;
		grid-row: 2;
		grid-column: 1/-1;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
	.campground__img {
		min-height: 150px;
	}
	.campground__btn {
		font-size: 1.05rem;
	}
}
@media (min-width: 1200px) {
	.campgrounds {
		grid-gap: 2em;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	}
}
</style>
