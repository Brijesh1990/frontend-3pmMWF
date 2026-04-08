import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your Firebase project configuration
const firebaseConfig = {

apiKey: "AIzaSyA7LrXYEi8kjWI8c_SNHs-amnH4e_XuT9U",

authDomain: "chat-auth-app-5000f.firebaseapp.com",

projectId: "chat-auth-app-5000f",

storageBucket: "chat-auth-app-5000f.firebasestorage.app",

messagingSenderId: "379364704511",

appId: "1:379364704511:web:6edf8e2d4ace409dafccca",

measurementId: "G-MYHQ9ED9GP"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
