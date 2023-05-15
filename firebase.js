// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, 
  authDomain: "twitterclonevercel.firebaseapp.com",
  projectId: "twitterclonevercel",
  storageBucket: "twitterclonevercel.appspot.com",
  messagingSenderId: "20436941951",
  appId: "1:20436941951:web:a788a01f3fc9fa06aed34a",
  measurementId: "G-LKWT649RTM",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);
export { app, db, storage };
