// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB-2YGI3ijm7OO1_YSTdD5QGz0nsZuN3_Y",
  authDomain: "contacts-ed196.firebaseapp.com",
  projectId: "contacts-ed196",
  storageBucket: "contacts-ed196.appspot.com",
  messagingSenderId: "91877096372",
  appId: "1:91877096372:web:2aa17d87c77d5de16b10e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)