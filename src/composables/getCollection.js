import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { ref } from "vue";

const getCollection = () => {
  const dataError = ref(null)
  const collection = ref([])

  const getData = async (id) => {
    const docId = id.trim()
    const docRef = doc(db, "users", docId);

    try {
      const docSnap = await getDoc(docRef);
      console.log(docSnap);

      if (docSnap.exists()) {
        collection.value.push(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      
    } catch (err) {
      console.log(err.message)
    }
  }

  return { dataError, collection, getData }


}

export default getCollection;