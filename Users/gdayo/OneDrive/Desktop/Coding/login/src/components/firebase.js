// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Lam0kYC9Rp2UIHsMALQ1D85QD_TfvqQ",
  authDomain: "loginsignup-4e08d.firebaseapp.com",
  projectId: "loginsignup-4e08d",
  storageBucket: "loginsignup-4e08d.appspot.com",
  messagingSenderId: "371446988923",
  appId: "1:371446988923:web:a24a2825e5b929337b62de",
  measurementId: "G-P9PEPKE09Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;