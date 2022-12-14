<template>
		<div class="container">
			<!-- 1 -->
			<!-- 1.1 HEADER-->
   <nav class="nav-bar nav-bar__sign-in">
				<a href="/" class="main-logo marginRight">
					<img src="../assets/Logo.svg" alt="site logo" />
				</a>
    <ul class="nav-list">
     <li class="nav-item">
      <a href="campgrounds.html" class="backBtn">
       <span>&#8592;</span>
       <span>Back to campgrounds</span>
      </a>
     </li>
    </ul>
   </nav>
				<!-- 1 -->
			<!-- 1.2 CONTENTS-->
			<section class="camp-contents">
				<form action="#" method="post" class="form-contents">
					<h1 class="form-title  form-heading">
						Start exploring camps from all around the world.
					</h1>

					<div class="form-control">
						<label for="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="johndoe_91"
						/>
					</div>
					<div class="form-control">
						<label for="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Choose Password"
						/>
					</div>

					<div class="form-control">
						<input
							type="submit"
							value="Create an account"
							class="btn"
						/>
					</div>
					<p class="account">
						Already a user?
						<a href="./login.html">Sign in</a>
					</p>
				</form>
			</section>
			<section class="camp-illustration camp-illustration-testimonial">
				<div class="testimonial-content">
					<div class="testimonial-comment">
						<p>
							&OpenCurlyDoubleQuote;YelpCamp has honestly saved me
							hours of research time, and the camps on here are
							definitely well picked and
							added.&CloseCurlyDoubleQuote;
						</p>
					</div>
					<div class="testimonial-profile">
						<img
							src="../Assets/User Testimonial.svg"
							alt="an image of a woman"
						/>
						<div class="profile-name">
							<h4>May Andrews</h4>
							<p>Professional Hiker</p>
						</div>
					</div>
				</div>
			</section>
		</div>
</template>

<script>
export default {
  name: "SignUp",
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>