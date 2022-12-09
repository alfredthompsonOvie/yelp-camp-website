<template>
	<div class="container">
		<nav class="nav-bar camp">
			<!-- site logo -->
			<RouterLink to="/" class="main-logo">
				<img src="@/assets/images/Logo.svg" alt="site logo" />
			</RouterLink>

			<!-- site mobile nav bar-->
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
			<!-- desktop -->
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

			<!-- hamburger -->
			<div class="hamburger" v-if="mobile">
				<Transition name="fade-up" mode="out-in">
					<button
						type="button"
						@click="mobileNav = !mobileNav"
						v-if="!mobileNav"
					>
						<img
							src="@/assets/images/HamburgerMenu.svg"
							alt="hamburger icon"
							class="openMenu"
						/>
					</button>
					<button type="button" @click="mobileNav = !mobileNav" v-else>
						<img
							src="@/assets/images/Close.svg"
							alt="close icon"
							class="closeMenu isHidden"
						/>
					</button>
				</Transition>
			</div>
		</nav>

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
						:to="{ name: 'individualCampground' }"
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
						:to="{ name: 'individualCampground' }"
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
						This is one of the best beach camping sites, beautiful and
						pristine.
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
						This is one of the best beach camping sites, beautiful and
						pristine.
					</p>
					<a
						href="individualCampground.html"
						class="cardBtn"
						data-camp="Buloy Springs"
						>View Campground</a
					>
				</div>
			</div>
			<!-- <div class="campgrounds">

			</div> -->
		</main>
		<footer class="footer">
			<img src="@/assets/images/Logo.svg" alt="site logo" />
		</footer>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
	name: "CampGroundsView",
	components: {
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
/* search page */
/* .form.search-form {
	background-color: #eee;
	padding-inline: 2em;
} */
.search-form .form-contents, .form__search .form-contents {
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
	padding-inline: 1.5em;
	border-radius: 6px;
}
fieldset {
	max-width: 450px;

}
.form__title {
	font-weight: 800;
	margin-bottom: .4em;
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
.nav-bar {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: var(--height);
	padding: 0 1.5em;
	position: relative;
	/* z-index: 99; */
}

/* add new campground */
.mobileNav__list {
	position: fixed;
	top: var(--height);
	left: 0;
	right: 0;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.9);
	z-index: 9;
	/* overflow-x: hidden; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.mobileNav__item {
	width: 100%;
	text-align: center;
	margin: 1em 0;
}
.mobileNav__link {
	display: block;
	padding: 8px;
	font-size: 36px;
	transition: 0.3s;
	color: #eee;
}
.hamburger {
	margin-left: auto;
	cursor: pointer;
}
.hamburger button {
	width: 2.5em;
	height: 2.5em;
	display: flex;
	align-items: center;
	justify-content: center;
}
.hamburger img {
	width: 100%;
}
.hamburger img.closeMenu {
	width: 80%;
}
@media (min-width: 580px){
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
 .search-icon{
  top: 18px;
 }
}
@media (min-width: 768px) and (max-width: 991px){
	.nav-bar, main, .footer {
		padding: 0 3em;
	}
}
@media (min-width: 992px){
	.nav-bar {
		padding-inline: 0;
	}
	.form__search {
		width: 100%;
	}
	}
</style>
