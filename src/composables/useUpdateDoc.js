import { ref } from "vue";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";


const useUpdateDoc = () => {
  const error = ref(null);

  const updateCollection = async (col, id) => {
    const collectionRef = doc(db, col, id);
    
    // Set the "capital" field of the city 'DC'
    await updateDoc(collectionRef, {
      comments: []
    });
    
  }

  return { error, updateCollection }
}

export default useUpdateDoc;