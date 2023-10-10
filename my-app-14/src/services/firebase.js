// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBltceW_uRwJVSMbxVXrvTocD9s-YoLL74",
    authDomain: "login-firebase-e790d.firebaseapp.com",
    projectId: "login-firebase-e790d",
    storageBucket: "login-firebase-e790d.appspot.com",
    messagingSenderId: "98362513830",
    appId: "1:98362513830:web:c7ad60bbf8c4a025119767",
    measurementId: "G-463H7WVJEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)