// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default { auth }