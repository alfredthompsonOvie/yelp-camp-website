<template>
	<nav class="nav__bar nav-bar__sign-in">
		<RouterLink to="/" class="main__logo marginRight">
			<img src="@/assets/images/Logo.svg" alt="yelpCamp logo" />
		</RouterLink>
		<ul class="nav-list">
			<li class="nav-item">
				<RouterLink :to="{ name: 'campgrounds' }" class="backBtn">
					<span>&#8592;</span>
					<span>Back to campgrounds</span>
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style scoped>
.nav__bar {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: var(--height);
	padding: 0 1.5em;
	position: relative;
	/* flex-wrap: wrap;
	line-height: 1px;
	gap: 0; */
}
.backBtn {
	font-size: 0.7rem;
	align-self: end;
	text-align: right;
	display: inline-block;
	color: #888;
}
@media (min-width: 768px) and (max-width: 991px) {
	.nav__bar {
		padding: 0 3em;
	}
}
</style>
