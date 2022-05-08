import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  Firestore,
  getDocs,
} from "firebase/firestore/lite";
// import { getFirebase } from "react-redux-firebase";
// import { getFirestore } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnaaLUhKwzwVS3UKCCHlWEDahCIhk4m3o",
  authDomain: "inplan-199e2.firebaseapp.com",
  projectId: "inplan-199e2",
  storageBucket: "inplan-199e2.appspot.com",
  messagingSenderId: "564537587845",
  appId: "1:564537587845:web:69becec22c5e5be83d51ec",
  measurementId: "G-D3ESXMHFZW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default { app, analytics, db };
