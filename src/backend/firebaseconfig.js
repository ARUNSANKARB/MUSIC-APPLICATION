import { initializeApp } from "firebase/app";

//! Authentication Services from Firebase
import { getAuth } from "firebase/auth";

//! Database Services from firebase
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeN7Hp7cvT3yqEh8OnCeW4QUe7SxzytVY",
  authDomain: "music-application-7c487.firebaseapp.com",
  projectId: "music-application-7c487",
  storageBucket: "music-application-7c487.firebasestorage.app",
  messagingSenderId: "474221356321",
  appId: "1:474221356321:web:13ade61b022d180c324a60"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export let __AUTH = getAuth(firebaseApp);
export let __DB = getFirestore(firebaseApp);

export default firebaseApp;
