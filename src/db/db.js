import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase
  .initializeApp({
    apiKey: "AIzaSyB3h8qWhViu6IGZRs3rFWncq8LOAImFU10",
    authDomain: "tweeter-6e054.firebaseapp.com",
    databaseURL: "https://tweeter-6e054.firebaseio.com",
    projectId: "tweeter-6e054",
    storageBucket: "tweeter-6e054.appspot.com",
    messagingSenderId: "797062721304",
    appId: "1:797062721304:web:3540d52effca322606386d",
    measurementId: "G-RNFHDGRZTL",
  })
  .firestore();

export default db;
