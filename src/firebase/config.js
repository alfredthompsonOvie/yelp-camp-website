import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


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

// init services
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

// this is for firebase version 8 
// const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { auth, db, storage }