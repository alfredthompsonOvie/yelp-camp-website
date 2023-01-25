import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore"; 


const useFirestore =  () => {
  const error = ref(null);

  const sendData = async (data) => {
    
    try {
      const docRef = await addDoc(collection(db, "users"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return { error, sendData }
}

export default useFirestore;