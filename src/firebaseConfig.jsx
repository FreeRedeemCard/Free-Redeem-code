// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfbRgv9NnuUHFs5CR3_IjzOj16hA7rAZM",
  authDomain: "redeem-code-29eec.firebaseapp.com",
  projectId: "redeem-code-29eec",
  storageBucket: "redeem-code-29eec.firebasestorage.app",
  messagingSenderId: "509445964435",
  appId: "1:509445964435:web:106cbacca8ed8c37fb0366"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };