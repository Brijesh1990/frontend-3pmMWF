// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "",

  authDomain: "chat-auth-app-5000f.firebaseapp.com",

  projectId: "chat-auth-app-5000f",

  storageBucket: "chat-auth-app-5000f.firebasestorage.app",

  messagingSenderId: "379364704511",

  appId: "",

  measurementId: ""

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);