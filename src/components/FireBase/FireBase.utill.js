import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbiwLRbB2sD331KSSLG-VhGGMIQxcbXXk",
  authDomain: "crwn-db-a4326.firebaseapp.com",
  projectId: "crwn-db-a4326",
  storageBucket: "crwn-db-a4326.appspot.com",
  messagingSenderId: "947646604674",
  appId: "1:947646604674:web:520f78a12fc7ed19159b9b",
  measurementId: "G-PMLJZSY8BD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};
