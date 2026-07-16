// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJrF3llT-PvjESeFjawn0iILm8pYvElvA",
  authDomain: "react-firebase-auth-91ee0.firebaseapp.com",
  projectId: "react-firebase-auth-91ee0",
  storageBucket: "react-firebase-auth-91ee0.firebasestorage.app",
  messagingSenderId: "518085382084",
  appId: "1:518085382084:web:8ebf001c787546a0d45e91",
  measurementId: "G-T9R0X052NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
