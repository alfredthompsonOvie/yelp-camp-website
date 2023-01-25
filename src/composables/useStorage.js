import { ref as reff, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref } from "vue";
import { storage } from "../firebase/config";
import getUser from "./getUser";


const { user } = getUser()
const useStorage = () => {
  const error = ref(null)
  const url = ref(null)
  const filePath = ref(null)

  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}`
    const storageRef = reff(storage, filePath.value)

    try {
      const uploadTask = await uploadBytes(storageRef, file);
      // console.log(uploadTask);
      const imageURl = await getDownloadURL(storageRef);
      url.value = imageURl;
      // console.log(url.value);
      error.value = null
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
      url.value = null;
    }
  }

  return { url, error, filePath, uploadImage }
}

export default useStorage;