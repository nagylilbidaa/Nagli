import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "ضع_هنا_apiKey",
  authDomain: "ضع_هنا_authDomain",
  projectId: "ضع_هنا_projectId",
  storageBucket: "ضع_هنا_storageBucket",
  messagingSenderId: "ضع_هنا_messagingSenderId",
  appId: "ضع_هنا_appId"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
