// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3cLZi9HFckpzxgLrrSotmb2yrlHkY4zc",
  authDomain: "brainiac-ac21e.firebaseapp.com",
  projectId: "brainiac-ac21e",
  storageBucket: "brainiac-ac21e.appspot.com",
  messagingSenderId: "213752520099",
  appId: "1:213752520099:web:1f9ad58d95800b03e94e16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInwithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("result", result);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
