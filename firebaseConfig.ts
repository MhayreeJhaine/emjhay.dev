import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlhDW05-x9PwpYWiRNdHsse1EGjJTj-R8",
  authDomain: "emjhay-dev.firebaseapp.com",
  projectId: "emjhay-dev",
  storageBucket: "emjhay-dev.firebasestorage.app",
  messagingSenderId: "1051725868541",
  appId: "1:1051725868541:web:fbc3c44704a98a27393d94",
  measurementId: "G-S94VXY7GEF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
signInAnonymously(auth).catch((error) => {
  console.error("Error signing in anonymously:", error.code, error.message);
});
