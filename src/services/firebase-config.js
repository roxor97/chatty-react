// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8XXqkI19reioBVWtPfJ4hoyOpqFw2j4k",
  authDomain: "chatty-react-1997.firebaseapp.com",
  projectId: "chatty-react-1997",
  storageBucket: "chatty-react-1997.appspot.com",
  messagingSenderId: "610426834485",
  appId: "1:610426834485:web:f96fdde8ba63d8d31e2b7c",
  measurementId: "G-Y9KDRNKJZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);