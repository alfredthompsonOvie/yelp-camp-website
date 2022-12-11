<template>
	<div class="container">
		<!-- 1 -->
		<!-- 1.1 HEADER-->
    <MainNav />
		<!-- 1 -->
		<!-- 1.2 CONTENTS-->
		<main class="main">
			<form action="#" method="post" class="form">
				<h1 class="page-title form-heading">Add New Comment</h1>

				<div class="form-control">
					<label for="description">Description</label>
					<textarea
						name="description"
						id="description"
						cols="30"
						rows="10"
						placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
					></textarea>
				</div>
				<div class="form-control">
					<input type="submit" value="Post Comment" />
				</div>
			</form>
		</main>
		<footer class="footer">
			<img src="@/assets/images/Logo.svg" alt="site logo" />
		</footer>
	</div>
</template>

<script>
import MainNav from "@/components/navigation/MainNav.vue";

export default {
  name: "CommentsView",
  components: {
		MainNav,
	},
	setup() {
		return {};
	},
};
</script>

<style scoped>
.main {
  grid-row: 2;
  grid-column: 2;
}
.form {
	max-width: 400px;
  margin-inline: auto;
}
</style>
