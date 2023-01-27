import { ref } from "vue";

import { auth } from "../features/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

const signup = async (email, password, displayName) => {
	error.value = null;
	isPending.value = true;

	try {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		if (!response) {
			throw new Error("Could not complete signup");
		}
		// ! check if it works, trying to save username to database
		// console.log(response.user);
		// updatedProfile
		await updateProfile(auth.currentUser, {
			displayName,

		})
		// console.log(auth.currentUser);

		error.value = null;
		isPending.value = false;
	} catch (error) {
		console.log(error.message);
		error.value = error.message;
		isPending.value = false;
	}
};

const useSignup = () => {
  return { error, isPending, signup }
}

export default useSignup;