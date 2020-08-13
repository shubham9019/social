import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCdXN3g957qn1GrfMdVpR4jNGCBDDehoWI",
    authDomain: "socialdb-e78a1.firebaseapp.com",
    databaseURL: "https://socialdb-e78a1.firebaseio.com",
    projectId: "socialdb-e78a1",
    storageBucket: "socialdb-e78a1.appspot.com",
    messagingSenderId: "319592780018",
    appId: "1:319592780018:web:8b65068362f05eb7b1406b",
    measurementId: "G-4FVQKZ9SMG"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage}