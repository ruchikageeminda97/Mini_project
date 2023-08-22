
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/";

const firebaseConfig = {
    apiKey: "AIzaSyBFvLmRJSs7Y0nrzqHPhG4l_j1l5zcN_A8",
    authDomain: "mini-project-b7ec8.firebaseapp.com",
    projectId: "mini-project-b7ec8",
    storageBucket: "mini-project-b7ec8.appspot.com",
    messagingSenderId: "741645006539",
    appId: "1:741645006539:web:64c036d240916b2afd0d4e"
  };
  


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// export const db = getFirestore(app);
// export const storage = getStorage(app);