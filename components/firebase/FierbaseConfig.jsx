// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiSudN4MbXkE1IPvPaCoQvOuIguOU8b7o",
  authDomain: "sign-up-2e78a.firebaseapp.com",
  projectId: "sign-up-2e78a",
  storageBucket: "sign-up-2e78a.appspot.com",
  messagingSenderId: "810626528362",
  appId: "1:810626528362:web:0ba237d1fdbcf9efcb0613",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
