// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-89f7e.firebaseapp.com",
  projectId: "mern-estate-89f7e",
  storageBucket: "mern-estate-89f7e.appspot.com",
  messagingSenderId: "414769103697",
  appId: "1:414769103697:web:da66359b4f2261611e4970"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);