// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxe8V1H756HMXQOGDIbcaKk6Zoe_Og64k",
  authDomain: "vidflixgpt.firebaseapp.com",
  projectId: "vidflixgpt",
  storageBucket: "vidflixgpt.appspot.com",
  messagingSenderId: "723998093058",
  appId: "1:723998093058:web:74dcf24acc962c7d0c9c1b",
  measurementId: "G-YQCMCS6S9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();