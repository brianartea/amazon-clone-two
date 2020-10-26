import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5gmSf8Mc0qWrj7_tfX06NZ1n6vKPDV3w",
    authDomain: "clone-two-9a7e4.firebaseapp.com",
    databaseURL: "https://clone-two-9a7e4.firebaseio.com",
    projectId: "clone-two-9a7e4",
    storageBucket: "clone-two-9a7e4.appspot.com",
    messagingSenderId: "1071724657724",
    appId: "1:1071724657724:web:9f2daacf5ac0620f779739",
    measurementId: "G-BQQ2WHBF5Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };