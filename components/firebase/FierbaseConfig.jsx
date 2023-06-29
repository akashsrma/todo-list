// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdZ9GqSTxai48YuUIHPjyI3mWLojcmMGI",
  authDomain: "wweraw-af753.firebaseapp.com",
  projectId: "wweraw-af753",
  storageBucket: "wweraw-af753.appspot.com",
  messagingSenderId: "500399006369",
  appId: "1:500399006369:web:2a59d4c4639135c22c46e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
