import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBbYf-9SBEtisBMI3K0y-_ekdWhFzinsxY",
    authDomain: "clone-49417.firebaseapp.com",
    projectId: "clone-49417",
    storageBucket: "clone-49417.appspot.com",
    messagingSenderId: "1078746856629",
    appId: "1:1078746856629:web:c7088329db77ffa88352fc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider, firebase}