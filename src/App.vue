<template>
	<RouterView />
</template>

<script>
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/features/firebase";

export default {
	name: "App",
	setup() {
		
// 	onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
// 		const uid = user.uid;
// 		console.log(uid);
//     // ...
//   } else {
//     // User is signed out
// 		console.log("signed out");
//     // ...
//   }
// });

		return {

		}
	}
};
</script>

<style scoped>

</style>
