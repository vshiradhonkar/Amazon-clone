import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4TaQUOviBZGnoz4xUFmmnmnuAKZgCeKo",
  authDomain: "clone-248c0.firebaseapp.com",
  projectId: "clone-248c0",
  storageBucket: "clone-248c0.appspot.com",
  messagingSenderId: "940828748663",
  appId: "1:940828748663:web:1eecc87e36fc00a89e4f72",
  measurementId: "G-6TB5N6DR8V"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth}; 