import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeFYd3lUuo8el0ntWlrwqkCfgE0PWCBR0",
  authDomain: "yelpcamp-website.firebaseapp.com",
  projectId: "yelpcamp-website",
  storageBucket: "yelpcamp-website.appspot.com",
  messagingSenderId: "592948076541",
  appId: "1:592948076541:web:53de4d2462b5ce17554394"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth }