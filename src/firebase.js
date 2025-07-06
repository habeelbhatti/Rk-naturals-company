// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ✅ Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR6VA8dd7a4rByR1U-aBQTbvgWq_vW8cc",
  authDomain: "rkfoods-ff84e.firebaseapp.com",
  projectId: "rkfoods-ff84e",
  storageBucket: "rkfoods-ff84e.appspot.com", // ✅ correct spelling here
  messagingSenderId: "5202972612",
  appId: "1:5202972612:web:c5221e8413bfa6aba2de91"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Firestore DB
export const db = getFirestore(app);

// ✅ Auth (for admin login)
export const auth = getAuth(app);
