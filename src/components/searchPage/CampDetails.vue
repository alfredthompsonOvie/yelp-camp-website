<template>
	<div class="container">
		<MainNav />

		<main class="main detailsPageContents">
			<div class="campground-details cardInfo">
				<div class="card">
					<img
						src="@/assets/images/CampImages/HighQualityImages/Mount-Ulap.png"
						alt="an image of mount ulap"
					/>
					<div class="card-heading">
						<h2 class="card-title">Mount Ulap</h2>
						<p>
							<span class="dollar">$</span>
							<span class="amount">104.99</span>
							<span class="amount">/</span>
							<span class="time">night</span>
						</p>
					</div>
					<p class="card-description">
						Mount Ulap is a 7.7 kilometer moderately point-to-point trail
						located near Tuba, Benguet, Philippines that offers the chance to
						see wildlife and is rated as moderate. The trail is primarily used
						for hiking.
					</p>
					<p>
						<em>Submitted by Andrew Mike.</em>
					</p>
				</div>
			</div>

			<div class="reviews">
				<div class="review-comment">
					<div class="review-comment-title title-flex">
						<h3>Adam Jones</h3>
						<p>13h ago</p>
					</div>
					<p class="review-comment-details">
						Honestly one of the best experiences ever, took us a while to figure
						out how to get there but it was amazing!
					</p>
				</div>
				<div class="review-comment">
					<div class="review-comment-title title-flex">
						<h3>Isaac Dylan</h3>
						<p>1 day ago</p>
					</div>
					<p class="review-comment-details">
						Traveling changes you as a person, you gain more perspective, this
						is the perfect spot to do that.
					</p>
				</div>
				<div class="review-comment">
					<div class="review-comment-title">
						<h3>Hudson Luca</h3>
						<p>3 days ago</p>
					</div>
					<p class="review-comment-details">
						Definitely recommend going there, not too far and not a lot of
						people to ruin the experience.
					</p>
				</div>
				<div class="btnContainer inner-padding">
					<RouterLink
						:to="{ name: 'CommentsView' }"
						class="ctaBtn cta-leave-a-review"
					>
						<span>
							<img
								src="@/assets/images/ChatBubble.svg"
								alt="chat bubble icon"
							/>
						</span>
						<span>Leave a Review</span>
					</RouterLink>
				</div>
			</div>
			<div class="mapContainer">
				<img src="@/assets/images/Map.png" alt="an image of a map" />
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
import MainNav from "@/components/navigation/MainNav.vue";

export default {
	name: "DetailsComponent",
	components: {
		MainNav,
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
.card,
.reviews,
.mapContainer {
	max-width: 350px;
	margin-inline: auto;
}

@media (min-width: 768px) and (max-width: 991px) {
	.nav-bar,
	main,
	.footer {
		padding: 0 3em;
	}
}
@media (min-width: 992px) {
	main {
	padding: 0;
}
	.mapContainer {
		grid-column: 1;
		grid-row: 1;
		max-width: 100%;
		width: 100%;
		/* height: 300px; */
	}
	.campground-details {
		grid-column: 2;
		grid-row: 1;
	}
	.reviews {
		grid-column: 2;
		grid-row: 2;
		padding: 2em;
		padding-top: 0;
		margin-bottom: 0em;
	}
	.card,
	.reviews {
		max-width: 100%;
		margin-inline: auto;
	}
}
</style>
