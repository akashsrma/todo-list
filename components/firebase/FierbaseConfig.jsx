// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQutRbRRrQ1tW8uo5gIXBg_UkBW5WTNck",
  authDomain: "fierbase-todo-1ca6b.firebaseapp.com",
  projectId: "fierbase-todo-1ca6b",
  storageBucket: "fierbase-todo-1ca6b.appspot.com",
  messagingSenderId: "648604067374",
  appId: "1:648604067374:web:8eb17d8144c8217a14e1bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
