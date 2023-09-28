// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7a31e.firebaseapp.com",
  projectId: "mern-estate-7a31e",
  storageBucket: "mern-estate-7a31e.appspot.com",
  messagingSenderId: "75729658442",
  appId: "1:75729658442:web:d4f2c9aebb1e422b037cb3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
