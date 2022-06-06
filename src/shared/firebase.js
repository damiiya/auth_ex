import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuDV5o9NlrKa6mUelDNFfl45NlHXurMdE",
  authDomain: "authex-bc54d.firebaseapp.com",
  projectId: "authex-bc54d",
  storageBucket: "authex-bc54d.appspot.com",
  messagingSenderId: "512766122999",
  appId: "1:512766122999:web:85095b9bad02e3a5326cf2",
  measurementId: "G-B0MNXPXL86",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;
