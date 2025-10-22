// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAukPuaB5RTDBR-G-LLusMBcSAAs1punI0",
  authDomain: "assignment-b12a09.firebaseapp.com",
  projectId: "assignment-b12a09",
  storageBucket: "assignment-b12a09.firebasestorage.app",
  messagingSenderId: "1012464709509",
  appId: "1:1012464709509:web:74694eb3541192bbdddeec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);