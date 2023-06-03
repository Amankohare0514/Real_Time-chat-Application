// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtzsRl3V8iQFHpMc1ftzebHzF6H78d-wM",
  authDomain: "chatapp-aman-e14cb.firebaseapp.com",
  projectId: "chatapp-aman-e14cb",
  storageBucket: "chatapp-aman-e14cb.appspot.com",
  messagingSenderId: "854749327081",
  appId: "1:854749327081:web:309ea08148f0080b48ca78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
