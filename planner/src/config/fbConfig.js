import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDgz5ie3PpGNkSQE-Z37kZmurRzAkAVF2I",
  authDomain: "taylor-planner.firebaseapp.com",
  databaseURL: "https://taylor-planner.firebaseio.com",
  projectId: "taylor-planner",
  storageBucket: "",
  messagingSenderId: "760173495179",
  appId: "1:760173495179:web:9e00e2953053f1e9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
