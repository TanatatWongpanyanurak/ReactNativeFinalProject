// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection,getDocs} from firebaseConfig
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIAdxGqRGlGwYtm9_9ivOG0Jlqr0pSMpY",
  authDomain: "project-904097311066605159.firebaseapp.com",
  projectId: "project-904097311066605159",
  storageBucket: "project-904097311066605159.appspot.com",
  messagingSenderId: "735453865437",
  appId: "1:735453865437:web:ad866ac565ed8ca21a4234",
  measurementId: "G-5V625HN19T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore