import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDl_A8bGkwr-wjlxX3fu2o6xnZa8vWVdKk",
  authDomain: "xiviaservices.firebaseapp.com",
  projectId: "xiviaservices",
  storageBucket: "xiviaservices.firebasestorage.app",
  messagingSenderId: "676795021885",
  appId: "1:676795021885:web:226c96a7d718c2e5ba0854",
  measurementId: "G-DPCRXSM71R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);