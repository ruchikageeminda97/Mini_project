import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_PP_FIREBASE_KEY,
  authDomain: "chatbot-1e300.firebaseapp.com",
  projectId: "chatbot-1e300",
  storageBucket: "chatbot-1e300.appspot.com",
  messagingSenderId: "681716370625",
  appId: "1:681716370625:web:2a220ab359c81f388b5840"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()