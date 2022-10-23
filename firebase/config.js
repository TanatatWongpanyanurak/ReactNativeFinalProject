import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBzyxmuBTGVYrURwqdv8kYXGk-hEpUPB_o",
  authDomain: "moblie-app-project.firebaseapp.com",
  projectId: "moblie-app-project",
  storageBucket: "moblie-app-project.appspot.com",
  messagingSenderId: "566455620808",
  appId: "1:566455620808:web:df6547c324963788be41fd",
  measurementId: "G-WN0DQQCXTL"
};

const app = initializeApp(config);
export const db = getFirestore(app);