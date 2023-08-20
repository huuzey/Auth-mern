// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-4c1ca.firebaseapp.com",
  projectId: "mern-auth-4c1ca",
  storageBucket: "mern-auth-4c1ca.appspot.com",
  messagingSenderId: "575673820265",
  appId: "1:575673820265:web:65ac451987d839a5e16ef8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
