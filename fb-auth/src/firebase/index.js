// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDYhnQkRJ8AT1ueU0mUMxkVf5TZ1V82sk4",
    authDomain: "fb-auth-cc227.firebaseapp.com",
    projectId: "fb-auth-cc227",
    storageBucket: "fb-auth-cc227.appspot.com",
    messagingSenderId: "1070690596608",
    appId: "1:1070690596608:web:c768a86e9d63e64b5965e5",
    measurementId: "G-YSLGELFBH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };