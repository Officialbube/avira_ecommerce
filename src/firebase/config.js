import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBH6P-rJrY1HyjlZY_jV-AHimLpJVGLka8",
  authDomain: "avira-ecommerce.firebaseapp.com",
  projectId: "avira-ecommerce",
  storageBucket: "avira-ecommerce.appspot.com",
  messagingSenderId: "347680546930",
  appId: "1:347680546930:web:716457bf0f2ce4c7e922eb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)
export const storage = getStorage(app)
export default app