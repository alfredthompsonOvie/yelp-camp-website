import { ref } from "vue";

import { auth } from "@/features/firebase";
import {  signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

// username/displayName/nickName
// const displayName = ref(null);

const login = async (email, password) => {

  error.value = null;
  isPending.value = true;

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    if (!response) {
      throw new Error("Could not complete login");
    }
    // displayName.value = response.user.displayName;
    // get username/displayName/nickName from response
  
  } catch (error) { 
    console.log(error.message);
		error.value = error.message;
		isPending.value = false;
  }
  


  error.value = null;
  isPending.value = false;
}

const useLogin = () => {
  // export username/displayName/nickName as well
  return { error, isPending, login }
}

export default useLogin;