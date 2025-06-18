// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKHqbQ8V8365DZjLxl4hmJq0OLy3yXuVs",
  authDomain: "medi-connect-c781c.firebaseapp.com",
  projectId: "medi-connect-c781c",
  storageBucket: "medi-connect-c781c.firebasestorage.app",
  messagingSenderId: "901976296678",
  appId: "1:901976296678:web:c99d6c3f7881690e94bf27",
  measurementId: "G-YW59RNP66V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export {app};
