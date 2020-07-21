import * as firebase from "firebase";

//Initializing firebase
const firebaseConfig = {
  apiKey: "AIzaSyCSFFBkqmVWVSRJoCC0Wqy7P6UAKFh_5vA",
  authDomain: "notify-dfcb6.firebaseapp.com",
  databaseURL: "https://notify-dfcb6.firebaseio.com",
  projectId: "notify-dfcb6",
  storageBucket: "notify-dfcb6.appspot.com",
  messagingSenderId: "116455433561",
  appId: "1:116455433561:web:37c3aa8ac5bffb31ec9848",
  measurementId: "G-C4408KDEG7",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
