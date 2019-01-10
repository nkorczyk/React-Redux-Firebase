import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB4WS1clKISoqCdKOekEGlcjj0KGOcrXio",
  authDomain: "react-redux-firebase-mario.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-mario.firebaseio.com",
  projectId: "react-redux-firebase-mario",
  storageBucket: "react-redux-firebase-mario.appspot.com",
  messagingSenderId: "895368184136"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
