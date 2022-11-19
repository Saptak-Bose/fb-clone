import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8_CI1P3sKwmH7wZnMUobu6F93KprjfRs",
  authDomain: "fb-clone-98731.firebaseapp.com",
  projectId: "fb-clone-98731",
  storageBucket: "fb-clone-98731.appspot.com",
  messagingSenderId: "1095453885758",
  appId: "1:1095453885758:web:6d6af48e6ed044ff5c986f",
  measurementId: "G-BJ1LQS09QC",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };