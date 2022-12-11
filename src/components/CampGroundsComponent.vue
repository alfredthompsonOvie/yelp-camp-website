<template>
	<div class="container">
		<!-- <nav class="nav-bar camp">
			<RouterLink to="/" class="main-logo">
				<img src="@/assets/images/Logo.svg" alt="site logo" />
			</RouterLink>

			<ul class="mobileNav__list" v-if="mobileNav">
				<li class="mobileNav__item">
					<RouterLink :to="{ name: 'home' }" class="mobileNav__link"
						>Home</RouterLink
					>
				</li>
				<li class="mobileNav__item">
					<RouterLink to="#" class="userName mobileNav__link"
						>Johndoe</RouterLink
					>
				</li>
				<li class="mobileNav__item">
					<RouterLink :to="{ name: 'home' }" class="logout mobileNav__link"
						>Logout</RouterLink
					>
				</li>
			</ul>

			<ul class="nav-list camp" v-if="!mobile">
				<li class="nav-item camp marginRight">
					<RouterLink to="/" class="nav-link camp">Home</RouterLink>
				</li>
				<li class="nav-item camp marginLeft">
					<RouterLink to="#" class="userName nav-link camp marginLeft"
						>Johndoe</RouterLink
					>
				</li>
				<li class="nav-item camp">
					<RouterLink :to="{ name: 'campgrounds' }" class="logout nav-link camp"
						>Logout</RouterLink
					>
				</li>
			</ul>

			<div class="hamburger" v-if="mobile">
				<Transition name="fade-up" mode="out-in">
					<button
						type="button"
						@click="mobileNav = !mobileNav"
						v-if="!mobileNav"
					>
						<font-awesome-icon icon="fa-solid fa-bars" class="openMenu" />
					</button>
					<button type="button" @click="mobileNav = !mobileNav" v-else>
						<font-awesome-icon icon="fa-solid fa-xmark" class="closeMenu" />
					</button>
				</Transition>
			</div>
		</nav> -->
		<MainNav  class="nav-bar"/>
		<main class="main">
			<form class="form search-form form__search">
				<fieldset>
					<legend class="form-heading form__title">Welcome to YelpCamp!</legend>
					<p>
						view our hand-picked campgrounds from all over the world, or add
						your own.
					</p>

					<div class="form-control-search form__group">
						<BaseInput
							placeholder="Search for camps"
							class="form__control search"
						/>

						<button type="submit" class="submit">Search</button>

						<img
							src="@/assets/images/SearchIcon.svg"
							alt="search icon"
							class="search-icon"
						/>
					</div>
					<RouterLink to="#" class="cta-addCamp"
						>Or add your own campground</RouterLink
					>
				</fieldset>
				<!-- <div class="form-contents">
				</div>
				<div class="search-header">
					<h1 class="form-heading">Welcome to YelpCamp!</h1>
				</div> -->
			</form>
			<div class="campgrounds-sites">
				<div class="campCard" data-camp="mount ulap">
					<img
						class="campCard-img"
						src="@/assets/images/CampImages/HighQualityImages/Mount-Ulap.png"
						alt="an image of mount ulap"
					/>

					<h4 class="campCard-title">Mount Ulap</h4>
					<p class="campCard-details">
						One of the most famous hikes in Benguet is Mt Ulap in Itogon
					</p>
					<RouterLink
						:to="{ name: 'DetailsView' }"
						class="cardBtn"
						data-camp="mount ulap"
						>View Campground</RouterLink
					>
				</div>
				<div class="campCard" data-camp="Calaguas Islands">
					<img
						class="campCard-img"
						src="@/assets/images/CampImages/HighQualityImages/Calaguas-Island.jpg"
						alt="an image of Calaguas Islands"
					/>

					<h4>Calaguas Islands</h4>
					<p>
						A paradise of islands that can rival the white sand beauty of
						Boracay.
					</p>
					<RouterLink
						:to="{ name: 'DetailsView' }"
						class="cardBtn"
						data-camp="Calaguas Islands"
						>View Campground</RouterLink
					>
				</div>
				<div class="campCard" data-camp="Onay Beach">
					<img
						class="campCard-img"
						src="@/assets/images/CampImages/HighQualityImages/Onay-Beach.jpg"
						alt="an image of Onay Beach"
					/>

					<h4>Onay Beach</h4>
					<p>
						This is one of the best beach camping sites, beautiful and pristine.
					</p>
					<a
						href="individualCampground.html"
						class="cardBtn"
						data-camp="Onay Beach"
						>View Campground</a
					>
				</div>
				<div class="campCard" data-camp="Seven Sisters Waterfall">
					<img
						class="campCard-img"
						src="@/assets/images/CampImages/HighQualityImages/Seven-Sisters-Waterfall.jpg"
						alt="an image of Seven Sisters Waterfall"
					/>

					<h4>Seven Sisters Waterfall</h4>
					<p>The Seven Sisters is the 39th tallest waterfall in Norway.</p>
					<a
						href="individualCampground.html"
						class="cardBtn"
						data-camp="Seven Sisters Waterfall"
						>View Campground</a
					>
				</div>
				<div class="campCard" data-camp="Latik Riverside">
					<img
						class="campCard-img"
						src="@/assets/images/CampImages/HighQualityImages/Latik-Riverside.jpg"
						alt="an image of Latik Riverside"
					/>

					<h4>Latik Riverside</h4>
					<p>
						Philippines is one of the most dazzling countries in all of Asia.
					</p>
					<a
						href="individualCampground.html"
						class="cardBtn"
						data-camp="Latik Riverside"
						>View Campground</a
					>
				</div>
				<div class="campCard" data-camp="Buloy Springs">
					<img
						class="campCard-img"
						src="@/assets/images/CampImages/HighQualityImages/Buloy-Springs.jpg"
						alt="an image of Buloy Springs"
					/>

					<h4>Buloy Springs</h4>
					<p>
						This is one of the best beach camping sites, beautiful and pristine.
					</p>
					<a
						href="individualCampground.html"
						class="cardBtn"
						data-camp="Buloy Springs"
						>View Campground</a
					>
				</div>
			</div>
		</main>
		<footer class="footer">
			<img src="@/assets/images/Logo.svg" alt="site logo" />
		</footer>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";
import MainNav from "./navigation/MainNav.vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
	name: "CampGroundsView",
	components: {
		MainNav,
		BaseInput,
	},
	setup() {
		const mobile = ref(null);
		const mobileNav = ref(null);
		const windowWidth = ref(null);

		function checkScreen() {
			windowWidth.value = window.innerWidth;

			if (windowWidth.value < 992) {
				mobile.value = true;
				mobileNav.value = false;
			} else {
				mobileNav.value = false;
				mobile.value = false;
			}
		}

		onMounted(() => {
			checkScreen();
			window.addEventListener("resize", checkScreen);
		});

		return {
			mobile,
			mobileNav,
		};
	},
};
</script>

<style scoped>
main {
	padding: 0 1.5em;
}
/* search page */
/* .form.search-form {
	background-color: #eee;
	padding-inline: 2em;
} */

.search-form .form-contents,
.form__search .form-contents {
	max-width: 400px;
}
.search-header {
	max-width: 400px;
}
.search-header p {
	margin-bottom: 1em;
}

/* .form-control-search {
	position: relative;
	z-index: 1;
} */

.search-icon {
	position: absolute;
	top: 19%;
	left: 15px;
	width: 1.3em;
	z-index: 2;
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
.form__control {
	background-color: #fff;
	padding: 1em;
	padding-left: 3em;
}
.submit {
	margin-top: 1em;
}
.container {
	background-color: #fff;
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
.campgrounds-sites {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 320px));
	grid-gap: 2em;
	padding: 3.5em 0;
	justify-content: center;
}
.campCard {
	padding: 0.8em;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	transition: all 0.3s;
	border-radius: 5.5px;
}
.campCard:hover {
	transform: scale(1.02);
}

.campCard img {
	width: 100%;
	border-radius: 5px;
}
.campCard * + * {
	margin-top: 1em;
}
.campCard p {
	margin-bottom: 1.2em;
}
.campCard a {
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
.cardBtn:hover {
	transform: translateY(-4px);
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
	transform: translateZ(20px);
}
@media (min-width: 580px) {
	.form__search {
		background-color: #eee;
		padding: 3em 2em;
	}
	.form__group {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		/* gap: 1em; */
	}
	.form__group .submit {
		margin-top: 0;
		margin-left: 1em;
	}

	.form-control-search .submit {
		flex: 1;
	}
	.search-icon {
		top: 18px;
	}

	.campCard-img {
		height: 180px;
	}
}
@media (min-width: 595px){
	.campgrounds-sites {
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
	.main {
		grid-row: 2;
		grid-column: 2/5;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, auto);
		grid-gap: 1em;
		padding: 0;
	}
	.form__search {
		width: 100%;
		border-radius: 6px;
		grid-row: 1;
		grid-column: 1/-1;
	}
	.campgrounds-sites {
		padding-top: 2em;
		grid-row: 2;
		grid-column: 1/-1;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

	}
	.campCard img {
	min-height: 150px;
}
.campCard a {
	font-size: 1.05rem;
}
}
@media(min-width: 1200px){
	.campgrounds-sites {
		grid-gap: 2em;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

	}
}





























</style>
