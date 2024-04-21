// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbwJJci6ZLPQfln4EEw9BnypAcSWOVUJ0",
    authDomain: "leaf-area-calc.firebaseapp.com",
    projectId: "leaf-area-calc",
    storageBucket: "leaf-area-calc.appspot.com",
    messagingSenderId: "578193429836",
    appId: "1:578193429836:web:ac5d224ea2e6047bb8abe9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
