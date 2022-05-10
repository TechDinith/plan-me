import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// import { getFirebase } from "react-redux-firebase";
// import { getFirestore } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNi4XwlWl68v5XoflTFXYrV3LdopTTaYA",
  authDomain: "inplantest-7966b.firebaseapp.com",
  projectId: "inplantest-7966b",
  storageBucket: "inplantest-7966b.appspot.com",
  messagingSenderId: "546856978288",
  appId: "1:546856978288:web:bc750fc4acfa603651f1b5",
  measurementId: "G-2M46RBNBGP",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export default { app, analytics, db, auth };
