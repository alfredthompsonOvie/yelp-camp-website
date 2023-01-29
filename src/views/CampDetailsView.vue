<template>
	<div class="container">
		<MainNav />

		<main class="main detailsPageContents">
			<template v-if="campground.length">
				<div class="campground-details cardInfo">
					<div class="card">
						<img
							src="@/assets/images/CampImages/HighQualityImages/Mount-Ulap.png"
							alt="an image of mount ulap"
						/>
						<div class="card-heading">
							<!-- <h2 class="card-title">Mount Ulap</h2> -->
							<h2 class="card-title">{{ campground[0].title }}</h2>
							<p>
								<span class="dollar">$</span>
								<!-- <span class="amount">104.99</span> -->
								<span class="amount">{{ campground[0].price }}</span>
								<span class="amount">/</span>
								<span class="time">night</span>
							</p>
						</div>
						<p class="card-description">
							{{ campground[0].description }}
						</p>
						<!-- <p class="card-description">
							Mount Ulap is a 7.7 kilometer moderately point-to-point trail
							located near Tuba, Benguet, Philippines that offers the chance to
							see wildlife and is rated as moderate. The trail is primarily used
							for hiking.
						</p> -->
						<p>
							<!-- <em>Submitted by Andrew Mike.</em> -->
							<em>Submitted by {{ campground[0].submittedBY }}.</em>
						</p>
					</div>
				</div>

				<div class="reviews">
					<template v-if="campground[0].comments.length">
						<div
							class="review-comment"
							v-for="comment in comments"
							:key="comment.name"
						>
							<div class="review-comment-title title-flex">
								<h3>{{ comment.name }}</h3>
								<p>{{ formatDate(comment.commentedAt) }}</p>
							</div>
							<p class="review-comment-details">
								{{ comment.description }}
							</p>
						</div>
					</template>
					<div class="review-comment" v-else>
						<p>No comment.</p>
						<p>Be the first to leave a comment.</p>
					</div>
					<!-- <div class="review-comment">
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
					</div> -->
					<div class="btnContainer inner-padding">
						<!-- todo how to pass params through routerlinks to the next page -->
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
					<BaseMap />
					<!-- <section id="map"></section> -->
					<!-- <img src="@/assets/images/Map.png" alt="an image of a map" /> -->
				</div>
			</template>

			<section v-if="dataError">
				<p>{{ dataError }}</p>
			</section>
		</main>
		<footer class="footer">
			<RouterLink :to="{ name: 'home' }">
				<img src="@/assets/images/Logo.svg" alt="site logo" />
			</RouterLink>
		</footer>
	</div>
</template>

<script>
import BaseMap from "@/components/BaseMap.vue"
import { ref, computed } from "vue";
import MainNav from "@/components/navigation/MainNav.vue";
import getCollection from "../composables/getCollection";

import { useUserIdStore } from "@/stores/userId";


// import { formatDistance } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';
export default {
	name: "DetailsComponent",
	components: {
		MainNav,
		BaseMap,
	},
	props: ["id"],
	setup(props) {
		const { dataError, collection, getData } = getCollection();
		const campground = ref([]);

		const store = useUserIdStore();
		store.getUserID(props.id);
		// console.log(store.userId);

		const fetchData = async () => {
			await getData(props.id);
			campground.value = collection.value;
			// console.log(campground.value);
			// console.log("cmmts", campground.value[0].comments);
		};
		fetchData();
		// console.log(campground.value.length);

		// console.log(dataError.value);

		const comments = computed(() => {
			const cmtArr = [];
			campground.value[0].comments.forEach((d) => cmtArr.push(JSON.parse(d)));
			console.log(cmtArr);
			return cmtArr;
		});

		const formatDate = (pastDate) => {
			const result = formatDistanceToNow(new Date(pastDate), { includeSeconds: true, addSuffix: true })

			return result;
		}

		return {
			campground,
			comments,
			formatDate,
			dataError
		};
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

.card {
	padding: 1.3em;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
	border-radius: 5px;
	margin-bottom: 2em;
}
.card img {
	border-radius: 5px;
	width: 100%;
}
.card * + * {
	margin-top: 0.5em;
}
.card-heading {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.card p {
	font-size: 0.8rem;
	line-height: 1.2;
}
.reviews {
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
	border-radius: 5px;
	padding: 1.3em;
	padding-top: 0;
	margin-bottom: 3em;
}
.review-comment-title {
	margin-bottom: 1em;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.reviews > * + * {
	border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.review-comment {
	padding: 1.5em 0;
}
.btnContainer {
	padding: 2em 0 0;
}
.cta-leave-a-review {
	background-color: #000;
	padding: 1em;
	display: flex;
	align-items: center;
	gap: 1em;
	color: #fff;
	width: 13em;
	border-radius: 5px;
}
.mapContainer {
	padding: 1.3em;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
	border-radius: 5px;
	margin-bottom: 1em;
	overflow: hidden;
}
.mapContainer img {
	width: 100%;
	height: 100%;
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

	.card,
	.reviews {
		max-width: 100%;
		margin-inline: auto;
	}
	.reviews {
		grid-column: 2;
		grid-row: 2;
		padding: 2em;
		padding-top: 0;
		margin-bottom: 0em;
		/* width: 100%; */
	}
	/*.review-comment {
		width: 100%;
	} */
	.btnContainer {
		display: flex;
		justify-content: flex-end;
	}
}
</style>
