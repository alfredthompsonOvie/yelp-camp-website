// import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";
// import { collection, getDocs, onSnapshot } from "firebase/firestore";
// import { collection, onSnapshot } from "firebase/firestore";

import { db } from "../firebase/config";
// import { ref } from "vue";
import { ref, watchEffect } from "vue";


const getCollections = (c, q) => {
	// change errorCollection to either errorCollections or just error
	const errorCollection = ref(null);
	const documents = ref([]);

	// 
	// const documents = ref(null)
	try {
		let colRef = collection(db, c);

		// if (q) {
		// 		colRef = 
		// 	// const q = query(campRef, orderBy("createdAt", "desc"));
		// }

	
		const unsub = onSnapshot(colRef, snapshot => {
			let docs = []
			snapshot.docs.forEach(doc => {
				docs.push({
					...doc.data(),
					id: doc.id
				})
			})
			documents.value = docs
		})
		
		watchEffect((onInvalidate) => {
			onInvalidate(() => unsub())
		})
	} catch (e) {
		errorCollection.value = e.message
	}


	// const getData = async (col) => {
	// 	try {
	// 		const campRef = collection(db, col)
	// 		const q = query(campRef, orderBy("createdAt", "desc"));
	// 		console.log(q);
	// 		// const querySnapshot = await getDocs(collection(db, col));
	// 		const querySnapshot = await getDocs(q);

	// 		let docs = querySnapshot.docs.map((doc) => {
	// 			// console.log(doc.id, " => ", doc.data());
	// 		return {
	// 					...doc.data(),
	// 					id: doc.id
	// 				}
	// 		});
	// 		collections.value = docs;

	// 	// 	const  unsub = onSnapshot(collection(db, col), (snapshot) => {
	// 	// 		let docs = snapshot.docs.map(doc => {
	// 	// 			return {
	// 	// 				...doc.data(),
	// 	// 				id: doc.id
	// 	// 			}
	// 	// 		})

	// 	// 	collections.value = docs;
	// 	// });
	// 	} catch (err) {
	// 		errorCollection.value = err.message;
	// 	}
	// };

	return { errorCollection, documents };
	// return { errorCollection, collections, getData, documents };
};

export default getCollections;
