import {
	doc,
	updateDoc,
	arrayUnion,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { ref } from "vue";

const useAddComments = () => {
	const error = ref(null);

	const addComments = async (col, id, data) => {
		try {
			const colRef = doc(db, col, id);
      const modified = new Date().getDate();

			// Atomically add a new comment to the "comments" array field.
			await updateDoc(colRef, {
				comments: arrayUnion(
					JSON.stringify({
						...data,
						createdAt: modified,
					})
				),
			});
		} catch (err) {
			error.value = err.message;
			console.log(err);
		}

		// Atomically remove a comment from the "comments" array field.
		// await updateDoc(colRef, {
		//     comments: arrayRemove("east_coast")
		// });
	};

	return { error, addComments };
};

export default useAddComments;
