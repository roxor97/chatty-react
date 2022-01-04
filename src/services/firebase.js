import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyA8XXqkI19reioBVWtPfJ4hoyOpqFw2j4k",
    authDomain: "chatty-react-1997.firebaseapp.com",
    projectId: "chatty-react-1997",
    storageBucket: "chatty-react-1997.appspot.com",
    messagingSenderId: "610426834485",
    appId: "1:610426834485:web:f96fdde8ba63d8d31e2b7c",
    measurementId: "G-Y9KDRNKJZB"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
