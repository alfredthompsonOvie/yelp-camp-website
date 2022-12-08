<template>
	<main class="container">
		<header>
			<RouterLink to="/">
				<img src="@/assets/images/logo.svg" alt="YelpCamp logo" />
			</RouterLink>
		</header>

		<section class="hero__wrapper">
      <img
        src="@/assets/images/HeroImage-Mobile.jpg"
        alt="an image of people camping"
        class="hero__img--mobile"
        v-if="mobile"
      />
      <img
        src="@/assets/images/HeroImage.jpg"
        alt="an image of people camping"
        class="hero__img--desktop"
        v-else
      />
		</section>

		<section class="content__wrapper">
			<section class="home-content">
				<h1 class="title">
          <span>Explore the best</span>
					<span>camps on Earth.</span>
        </h1>
				<p>
					YelpCamp is a curated list of the best camping spots on Earth.
					Unfiltered and unbiased reviews.
				</p>
				<ul class="feedback--list">
					<li class="feedback--item">
						<img src="@/assets/images/Checkmark.svg" alt="Checkmark" />
						<span>Add your own camp suggestions.</span>
					</li>
					<li class="feedback--item">
						<img src="@/assets/images/Checkmark.svg" alt="Checkmark" />
						<span>Leave reviews and experiences.</span>
					</li>
					<li class="feedback--item">
						<img src="@/assets/images/Checkmark.svg" alt="Checkmark" />
						<span>See locations for all camps.</span>
					</li>
				</ul>
				<RouterLink to="/about" class="cta">View Campgrounds</RouterLink>
			</section>
			<section class="sponsors">
				<p>Partnered with:</p>
				<ul>
					<li>
						<img src="@/assets/images/Airbnb.svg" alt="airbnb logo" />
					</li>
					<li>
						<img src="@/assets/images/Booking.svg" alt="booking.com logo" />
					</li>
					<li>
						<img src="@/assets/images/PlumGuide.svg" alt="plum Guide logo" />
					</li>
				</ul>
			</section>
		</section>
	</main>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
	components: {},
	setup() {
		const mobile = ref(null);
		const windowWidth = ref(null);
		function checkScreen() {
			windowWidth.value = window.innerWidth;
			if (windowWidth.value > 991) {
				mobile.value = false;
			} else {
				mobile.value = true;
			}
		}
		onMounted(() => {
			checkScreen();
			window.addEventListener("resize", checkScreen);
		});

		return {
			mobile,
		};
	},
};
</script>

<style scoped>
.container {
  background-color: #eee;
}
header {
	padding: 1.5em 1.5em;
}
.hero__img--mobile {
	min-height: 15em;
	object-fit: cover;
  width: 100%;
}
.content__wrapper {
  padding: 1em 1.5em;
}
.title {
  font-size: clamp(1.6rem, 9vw, 4rem);
	color: #000;
  line-height: 1;
}
.title span {
  display: block;
}
.home-content > * {
	margin-bottom: 0.5em;
}
.feedback--list {
	margin-top: 0.8em;
}
.feedback--item {
	display: flex;
	align-items: center;
	gap: 0.5em;
	line-height: 1;
}
.feedback--item + .feedback--item {
	margin-top: 0.8em;
}
.cta {
	background-color: black;
	padding: 1em 2em;
	border-radius: 6px;
	color: #fff;
	margin-top: 1em;
}
.sponsors {
	padding-top: 1em;
}
.sponsors ul {
	display: flex;
	align-items: center;
}

@media (min-width: 601px) {
  header {
    padding-inline: 2em;
  }
  .content__wrapper {
  padding: 1.5em 2em;
}
}
@media (min-width: 768px) and (max-width: 991px) {
  .title {
		font-size: 3.5rem;
	}
  header,	.content__wrapper, .footer {
		padding-inline: 3em;
	}
}

@media (min-width: 992px) {
  .container {
		display: grid;
		grid-template-rows: 5.5em auto 5.5em;
		grid-template-columns: 1fr 5fr 1fr 4fr 1fr;
		height: 100vh;
    overflow: hidden;
  }
	header {
		grid-row: 1;
		grid-column: 2;
	}
	.hero__wrapper {
		grid-row: 1/-1;
		grid-column: 4/-1;
    overflow: hidden;
	}
  .hero__img--desktop {
    widows: 100%;
    min-height: 100%;
}
	.content__wrapper {
		grid-row: 2;
		grid-column: 2;
	}
  .title {
    font-size: 2rem;
		font-size: clamp(2rem, 4vw, 3.5rem);
	}
}
</style>
