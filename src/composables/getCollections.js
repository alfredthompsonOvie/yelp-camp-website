import { collection, getDocs } from "firebase/firestore";
// import { collection, getDocs, onSnapshot } from "firebase/firestore";

import { db } from "../firebase/config";
import { ref } from "vue";


const getCollections = () => {
	// change errorCollection to either errorCollections or just error
	const errorCollection = ref(null);
	const collections = ref([]);

	const getData = async (col) => {
		try {
			const querySnapshot = await getDocs(collection(db, col));

			let docs = querySnapshot.docs.map((doc) => {
				console.log(doc.id, " => ", doc.data());
			return {
						...doc.data(),
						id: doc.id
					}
			});
			collections.value = docs;

		// 	const  unsub = onSnapshot(collection(db, col), (snapshot) => {
		// 		let docs = snapshot.docs.map(doc => {
		// 			return {
		// 				...doc.data(),
		// 				id: doc.id
		// 			}
		// 		})

		// 	collections.value = docs;
		// });
		} catch (err) {
			errorCollection.value = err.message;
		}
	};

	return { errorCollection, collections, getData };
};

export default getCollections;
