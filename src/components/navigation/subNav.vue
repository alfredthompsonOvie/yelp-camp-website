<template>
	<nav class="nav-bar nav-bar__sign-in">
		<RouterLink to="/" class="main-logo marginRight">
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

<style scoped></style>
