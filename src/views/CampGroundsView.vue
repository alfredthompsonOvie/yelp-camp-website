<template>
	<div class="container">
		<MainNav class="nav-bar" />
		<main class="searchPageContents">
			<form 
			class="form form__search" 
			@submit.prevent="submit">
				<fieldset class="form__contents">
					<legend class="form__title">Welcome to YelpCamp!</legend>
					<p class="form__description">
						view our hand-picked campgrounds from all over the world, or add
						your own.
					</p>

					<div class="form__group--search">
						<BaseInput
							placeholder="Search for camps"
							class="search"
							v-model="search"
							type="search"
							name="search"
							/>
							<!-- :error="errors.search" -->

						<button type="submit" class="submit">Search</button>

						<img
							src="@/assets/images/SearchIcon.svg"
							alt="search icon"
							class="search__icon"
							/>
							<!-- :class="{ 'search__icon--error': errors.search }" -->
					</div>
					<RouterLink :to="{ name: 'AddCampgroundView' }" class="cta-addCamp"
						>Or add your own campground</RouterLink
					>
				</fieldset>
			</form>

			<div class="campgrounds">
				<template
				v-if="campgrounds.length"
				>
					<TransitionGroup  
					appear
					@enter="onEnter"
					:css="false"
					>
						<div
							v-for="campground in campgrounds"
							:key="campground.title"
							class="campground"
							>
							<img
								class="campCard-img campground__img"
								:src="campground.url"
								:alt="`an image of ${campground.title}`"
							/>
			
							<h4 class="campCard-title campground__title">
								{{ campground.title }}
							</h4>
							<p class="campCard-details campground__details">
								{{ truncateText(campground.description) }}
							</p>
							<RouterLink
								:to="{ name: 'CampDetailsView', params: { id: campground.id } }"
								class="campground__btn"
								data-camp="mount ulap"
								>View Campground</RouterLink
							>
						
						</div>
					</TransitionGroup>

				</template>
				<section class="" v-if="error">
					<p>
						{{ error }}
					</p>
				</section>
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
import { ref, watch } from "vue";
import MainNav from "@/components/navigation/MainNav.vue";
import BaseInput from "@/components/BaseInput.vue";

// import { useField, useForm } from "vee-validate";
// import { object, string } from "yup";

import getCollections from "@/composables/getCollections";
import { gsap } from "gsap";

export default {
	name: "CampGroundsView",
	components: {
		MainNav,
		BaseInput,
	},
	setup() {
		const search = ref('');
		// const campgrounds = ref([]);
		// const { error, collections, getData } = getCollections()
		const { error, documents: campgrounds, fetchDataFromDb } = getCollections()
		fetchDataFromDb("users")

		// const fetchDataFromDb = async () => {
		// 	await getData("users");
		// 	campgrounds.value = collections.value
		// }
		// fetchDataFromDb();

		// Define a validation schema
		// const schema = object({
		// 	search: string()
		// });
		// ===================================

		// Create a form context with the validation schema
		// const { handleSubmit, errors } = useForm({
		// 	validationSchema: schema,
		// });

		// const { value: search } = useField("search")
		watch(search, (nV) => {
			if (nV === "") {
				fetchDataFromDb("users");
			}
			console.log(nV);
		})

		// handle Search
		// const submit = handleSubmit(values => {
		// 	console.log("submit", values.search);
		// // const { error, documents: campgrounds } = getCollections("users", ["title", "==", values.search])
		// 	fetchDataFromDb("users", ["title", "==", values.search])
		// 	if (values.search === "") {
		// 		fetchDataFromDb("users")
		// 	}
		// })

		const submit = () => {
			fetchDataFromDb("users", ["title", "==", search.value])
		}

		const joinTitle = (title) => {
			return title.split(" ").join("-")
		}
		const truncateText = (text) => {
			return `${text.split(" ").slice(0,16).join(" ")}...`
		}
		const onEnter = () => {
			gsap.fromTo(".campground", {
				autoAlpha: 0.01,
				stagger: 0.2,
				// y: 50,
				// onComplete: done
			}, {
				autoAlpha: 1,
			})
		} 
		// const onEnter = (el, done) => {
		// 	gsap.from(el, {
		// 		autoAlpha: 0.01,
		// 		stagger: 0.2,
		// 		y: 50,
		// 		onComplete: done
		// 	})
		// } 

		return {
			search,
			// errors,
			submit,
			campgrounds,
			joinTitle,
			onEnter,
			truncateText,
			error
		};
	},
};
</script>

<style scoped>
main {
	padding: 0 1.5em;
}

.form__description {
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
}
fieldset {
	max-width: 450px;
}
.form__title {
	font-weight: 800;
	margin-bottom: 0.4em;
	font-size: 2.46rem;
	font-size: clamp(1.7rem, 6.6vw, 2.46rem);
}
.form__group {
	position: relative;
	z-index: 1;
}

.submit {
	margin-top: 1em;
}
.fade-up-enter-from,
.fade-up-leave-to {
	opacity: 0;
}
.fade-up-enter-active,
.fade-up-leave-active,
.fade-up-move {
	transition: all 0.3s ease;
}

.campgrounds {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 2em;
	padding: 3.5em 0;
	justify-content: center;
	min-height: 20em;
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
	justify-self: center;
	max-width: 320px;
}
.campground:hover {
	transform: scale(1.02);
}

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
.campground__btn:active {
	transform: translateY(4px);
	box-shadow:inset -4px -4px 10px rgba(0, 0, 0, 0.3);
}
.campground__btn:hover {
	transform: translateY(-4px);
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}
@media (min-width: 580px) {
	.form__search {
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
		justify-content: space-between;
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
		grid-row: 2;
		grid-column: 1/-1;
	}
.campground {
	justify-self: initial;
	max-width: 100%;
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
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	}
}
</style>
