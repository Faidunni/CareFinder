// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUp5eIWjH2aA51q8T70D7lv6kWUMnH9fY",
  authDomain: "carefinder-72e2d.firebaseapp.com",
  projectId: "carefinder-72e2d",
  storageBucket: "carefinder-72e2d.appspot.com",
  messagingSenderId: "1009493265917",
  appId: "1:1009493265917:web:544c59a5d2d11bf1191d94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const colRef = collection(db, "hospitalresults");
export default app;
