import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBBVwT8qO1pci3MQtrkSgy8N8ycCHksJqY",
    authDomain: "todo-redux-29ee3.firebaseapp.com",
    projectId: "todo-redux-29ee3",
    storageBucket: "todo-redux-29ee3.appspot.com",
    messagingSenderId: "651441713466",
    appId: "1:651441713466:web:04b8d89ccea709fe4be003"
  };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

