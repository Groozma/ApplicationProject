// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfiuwaEDYNyyPqKWI3JTb6EIEK5tq-SH0",
  authDomain: "onward-social-skills.firebaseapp.com",
  projectId: "onward-social-skills",
  storageBucket: "onward-social-skills.firebasestorage.app",
  messagingSenderId: "839028325645",
  appId: "1:839028325645:web:3995672cb04bc4cf3d4444"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services and export them for use in other components
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export the app instance if needed, though usually services are enough
export default app;