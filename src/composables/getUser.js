import { ref } from "vue";

import { auth } from "@/features/firebase";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
  // console.log(_user);
  user.value = _user;
  // console.log(user.value);
  // console.log("onAuthStateChanged: ",  user.value);
})

const getUser = () => {
  return { 
    user
  }
}

export default getUser;