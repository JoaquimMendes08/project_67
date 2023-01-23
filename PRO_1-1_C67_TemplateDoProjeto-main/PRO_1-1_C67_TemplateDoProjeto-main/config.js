import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyBjPAT4YA-GQlp17s2923TOuUp7tn4JwRw",
    authDomain: "project-67-3b3b7.firebaseapp.com",
    databaseURL: "https://project-67-3b3b7-default-rtdb.firebaseio.com",
    projectId: "project-67-3b3b7",
    storageBucket: "project-67-3b3b7.appspot.com",
    messagingSenderId: "443526505901",
    appId: "1:443526505901:web:93e0908205c2fab09ced24",
    measurementId: "G-Z288KZXW50"
  };

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();