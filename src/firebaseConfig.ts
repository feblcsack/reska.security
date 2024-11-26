import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2f2opWJCk8ZqUYdlrYcs8f4PSCX_XrkI",
  authDomain: "reska-1b4cc.firebaseapp.com",
  projectId: "reska-1b4cc",
  storageBucket: "reska-1b4cc.firebasestorage.app",
  messagingSenderId: "199005075337",
  appId: "1:199005075337:web:a86340dee30c2942465358",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
