import firebase from "firebase/compat/app";
/* firebase/compat/app */
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLmE9OJUrr-zhvYlhH7FMb4aIsa8lps-k",
  authDomain: "crwn-db-1c597.firebaseapp.com",
  projectId: "crwn-db-1c597",
  storageBucket: "crwn-db-1c597.appspot.com",
  messagingSenderId: "643591164779",
  appId: "1:643591164779:web:c88af4a10302cacc9f722e",
  measurementId: "G-37VRYC7T2X",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase