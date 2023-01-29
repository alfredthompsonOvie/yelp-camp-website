import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import { ref, watchEffect } from "vue";


const getCollections = () => {
	// change errorCollection to either errorCollections or just error
	const error = ref(null);
	const documents = ref([]);

	// q = ["userUid", "==", currentUserId]
	// OR
	// q = ["title", "==", values.search]
	const fetchDataFromDb = (c, q) => {
		try {
			const colRef = collection(db, c);
			let campRef = query(colRef, orderBy("createdAt", "desc"))
	
			if (q) {
				campRef = query(colRef, where(...q), orderBy("createdAt", "desc"));
			}
	
		
			const unsub = onSnapshot(campRef, snapshot => {
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
			error.value = e.message
		}

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

	return { error, documents, fetchDataFromDb };
	// return { errorCollection, collections, getData, documents };
};

export default getCollections;
