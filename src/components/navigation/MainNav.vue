<template>
	<nav class="nav__bar">
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
			<template v-if="loggedIn">
				<li class="nav__item marginLeft">
					<RouterLink to="#" class="userName nav__link marginLeft">{{
						user.currentUser
					}}</RouterLink>
				</li>
				<li class="nav__item">
					<RouterLink :to="{ name: 'campgrounds' }" class="logout nav__link"
						>Logout</RouterLink
					>
				</li>
			</template>
			<template v-else>
				<li class="nav__item marginLeft">
					<RouterLink
						:to="{ name: 'SignIn' }"
						class="userName nav__link marginLeft"
						>Login</RouterLink
					>
				</li>
				<li class="nav__item">
					<RouterLink :to="{ name: 'SignUp' }" class="logout nav__link"
						>Create an account</RouterLink
					>
				</li>
			</template>
		</ul>
		<!-- desktop -->
		<ul class="nav__list" v-if="!mobile">
			<li class="nav__item marginRight">
				<RouterLink to="/" class="nav__link">Home</RouterLink>
			</li>
			<template v-if="loggedIn">
				<li class="nav__item marginLeft">
					<RouterLink to="#" class="userName nav__link marginLeft">{{
						user.currentUser
					}}</RouterLink>
				</li>
				<li class="nav__item logout nav__link" @click.prevent="logOut">
					Logout
				</li>
			</template>
			<template v-else>
				<li class="nav__item marginLeft">
					<RouterLink
						:to="{ name: 'SignIn' }"
						class="userName nav__link marginLeft"
						>Login</RouterLink
					>
				</li>
				<li class="nav__item">
					<RouterLink :to="{ name: 'SignUp' }" class="logout nav__link"
						>Create an account</RouterLink
					>
				</li>
			</template>
		</ul>

		<!-- hamburger -->
		<div class="hamburger" v-if="mobile">
			<Transition name="fade-up" mode="out-in">
				<button type="button" @click="mobileNav = !mobileNav" v-if="!mobileNav">
					<font-awesome-icon icon="fa-solid fa-bars" class="openMenu" />
				</button>
				<button type="button" @click="mobileNav = !mobileNav" v-else>
					<font-awesome-icon icon="fa-solid fa-xmark" class="closeMenu" />
				</button>
			</Transition>
		</div>
	</nav>
</template>

<script>
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

import { signOut } from "firebase/auth";
import { auth } from "@/features/firebase";

export default {
	setup() {
		const mobile = ref(null);
		const mobileNav = ref(null);
		const windowWidth = ref(null);

		const user = useUserStore();
		const router = useRouter();

		const loggedIn = user.isUserLoggedIn;

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

		function logOut() {
			user.logUserOut();

			signOut(auth)
				.then(() => {
					// Sign-out successful.
					router.push({ name: "campgrounds" });
				})
				.catch((error) => {
					// An error happened.
					console.log(error);
				});
		}

		onMounted(() => {
			checkScreen();
			window.addEventListener("resize", checkScreen);
		});

		return {
			mobile,
			mobileNav,
			loggedIn,
			logOut,
			user,
		};
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
}
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

.openMenu,
.closeMenu {
	font-size: 1.6em;
}
@media (min-width: 768px) and (max-width: 991px) {
	.nav__bar {
		padding: 0 3em;
	}
}
@media (min-width: 992px) {
	.nav__bar {
		padding-inline: 0;
		grid-row: 1;
		grid-column: 2/5;
	}
	.nav__list {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.nav__item {
		width: initial;
		text-align: center;
		margin: 0;
	}
	.nav__link {
		display: block;
		padding: 8px;
		font-size: 1rem;
		transition: 0.3s;
		color: #999;
	}
	.nav__item.marginRight {
		margin-right: auto;
	}
	.nav__link.logout {
		background-color: #000;
		border-radius: 5px;
		padding: 0.8em 1.2em;
	}
}
</style>
