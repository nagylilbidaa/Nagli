import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjmj1TjIjWrJjhisP-Or8OFYJ3TCZRSxs",
  authDomain: "nagli-6f321.firebaseapp.com",
  databaseURL: "https://nagli-6f321-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nagli-6f321",
  storageBucket: "nagli-6f321.firebasestorage.app",
  messagingSenderId: "19948171002",
  appId: "1:19948171002:web:568a05fbdaba240879a343",
  measurementId: "G-D96CXV6Z01"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
