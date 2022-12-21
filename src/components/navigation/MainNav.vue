<template>
	<nav class="nav__bar">
		<!-- site logo -->
		<RouterLink to="/" class="main__logo">
			<img src="@/assets/images/Logo.svg" alt="site logo" />
			<span v-if="!mobile">Home</span>
		</RouterLink>

		<!-- site mobile nav bar-->
		<ul class="mobileNav__list" v-show="mobileNav">
			<template v-if="user">
				<li class="username mobileNav__item">
					{{ user.displayName }}
				</li>
				<li class="mobileNav__item">
					<button @click.prevent="logUserOut">Logout</button>
				</li>
			</template>
			<template v-else>
				<li class="mobileNav__item">
					<RouterLink :to="{ name: 'SignIn' }" class="mobileNav__link"
						>Login</RouterLink
					>
				</li>
				<li class="mobileNav__item">
					<RouterLink :to="{ name: 'SignUp' }" class="mobileNav__link btn"
						>Create an account</RouterLink
					>
				</li>
			</template>
		</ul>

		<!-- desktop -->
		<ul class="nav__list" v-if="!mobile">
			<template v-if="user">
				<li class="nav__item marginLeft">
					<!-- <RouterLink to="#" class="userName nav__link marginLeft">{{
						user.displayName
					}}</RouterLink> -->
					{{ user.displayName }}
				</li>
				<li class="nav__item logout nav__link">
					<!-- Logout -->
					<button type="button" @click.prevent="logUserOut" class="btn">
						Logout
					</button>
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
				<button type="button" @click.prevent="openMenu" v-if="!mobileNav">
					<font-awesome-icon icon="fa-solid fa-bars" class="openMenu" />
				</button>
				<button type="button" @click.prevent="closeMenu" v-else>
					<font-awesome-icon icon="fa-solid fa-xmark" class="closeMenu" />
				</button>
			</Transition>
		</div>
	</nav>
</template>

<script>
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";

import { signOut } from "firebase/auth";
import { auth } from "@/features/firebase";

import getUser from "@/composables/getUser";

import { gsap } from "gsap";

export default {
	setup() {
		const mobile = ref(null);
		const mobileNav = ref(null);
		const windowWidth = ref(null);

		const userStore = useUserStore();
		const router = useRouter();

		const { user } = getUser();
		// const userName = ref(user.value?.displayName)
		// console.log(user.value.displayName);
		// const loggedIn = userStore.isUserLoggedIn;

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
		function logUserOut() {
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
		const animateMenu = () => {
			const tl = gsap.timeline({
				paused: true,
				onReverseComplete: () => {
					mobileNav.value = false;
					gsap.to([".mobileNav__list", ".mobileNav__item"], {
						clearProps: "all",
					});
					console.log("reverse complete");
				},
			});

			tl.fromTo(
				".mobileNav__list",
				{
					clipPath: "circle(0% at 100% 0%)",
				},
				{
					clipPath: "circle(100% at 100% 0%)",
					duration: 2,
					ease: "back",
				}
			).from(
				".mobileNav__item",
				{
					autoAlpha: 0.01,
					y: 20,
					stagger: 0.1,
				},
				"<0.2"
			);

			return tl;
		};
		function openMenu() {
			mobileNav.value = true;
			animateMenu().play();
		}
		function closeMenu() {
			animateMenu().timeScale(1.5).reverse(0);
		}

		onMounted(() => {
			checkScreen();
			window.addEventListener("resize", checkScreen);
		});

		return {
			mobile,
			mobileNav,
			openMenu,
			closeMenu,
			userStore,
			user,

			logUserOut,
		};
	},
};
</script>

<style scoped>
.nav__bar {
	display: flex;
	align-items: center;
	height: var(--height);
	padding: 0 1.5em;
	position: relative;
}
.main__logo {
	display: flex;
	align-items: center;
	gap: 0.6em;
	color: #555;
	font-weight: 700;
}

.mobileNav__list {
	position: fixed;
	top: var(--height);
	left: 0;
	right: 0;
	height: 100%;
	background-color: #fff;
	text-align: center;
	clip-path: circle(0% at 100% 0);
	z-index: 9;
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
	font-size: clamp(1.2rem, 9vw, 2.5rem);
	transition: 0.3s;
	color: #eee;
	color: #555;
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
		color: #888;
	}
	.nav__list {
		margin-left: auto;
		/* width: 100%; */
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 1em;
	}
	.nav__item {
		width: initial;
		text-align: center;
		margin: 0;
		color: #777;
	}
	.nav__item.username {
		font-weight: 700;
	}

	.nav__link {
		display: block;
		padding: 8px;
		font-size: 1rem;
		transition: 0.3s;
		color: inherit;
	}
	.nav__item.marginRight {
		margin-right: auto;
	}
	.nav__link.logout {
		background-color: #000;
		border-radius: 5px;
		padding: 0.8em 1.2em;
		color: #fff;
	}
	.logout {
		background-color: #000;
		border-radius: 5px;
		padding: 0.8em 1.2em;
	}
}
</style>
