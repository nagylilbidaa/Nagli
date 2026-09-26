
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "naqli-...firebaseapp.com",
  projectId: "naqli-...",
  storageBucket: "naqli-....appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// ⚠️ ضع هنا نفس الكونفيغ اللي نسخته من Firebase Console > Project Settings > Your apps

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
