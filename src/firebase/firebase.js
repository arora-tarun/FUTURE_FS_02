import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⚠️ Replace these with your firebase config values
const firebaseConfig = {
  apiKey: "AIzaSyBexAeKjTeIE6daFiO39ex9rzzIt40M8Ck",
  authDomain: "mini-ecommerce-7ec84.firebaseapp.com",
  projectId: "mini-ecommerce-7ec84",
  storageBucket: "mini-ecommerce-7ec84.firebasestorage.app",
  messagingSenderId: "153631081470",
  appId: "1:153631081470:web:345a6624f67c311bad36af",
  measurementId: "G-QDWKBNH050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
