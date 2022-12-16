import { ref } from "vue";

import { auth } from "@/features/firebase";
import {  signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {

  error.value = null;
  isPending.value = true;

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
  
    if (!response) {
      throw new Error("Could not complete login");
    }
  
  } catch (error) { 
    console.log(error.message);
		error.value = error.message;
		isPending.value = false;
  }
  


  error.value = null;
  isPending.value = false;
}

const useLogin = () => {
  return { error, isPending, login }
}

export default useLogin;