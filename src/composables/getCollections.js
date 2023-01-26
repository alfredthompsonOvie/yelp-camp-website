import { collection, getDocs } from "firebase/firestore";

import { ref } from "vue";
import { db } from "../firebase/config";

const getCollections = () => {
	const errorCollection = ref(null);
	const collections = ref([]);

	const getData = async (col) => {
		try {
			const querySnapshot = await getDocs(collection(db, col));
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        collections.value.push(doc.data())
				// console.log(doc);
			});
		} catch (err) {
			errorCollection.value = err.message;
			console.log(err.message);
		}
	};

	return { errorCollection, collections, getData };
};

export default getCollections;
