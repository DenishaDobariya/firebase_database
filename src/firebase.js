// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEXKjXJ4yUp0fUfDFqZJ07zQxkNbHboDQ",
  authDomain: "firestoredb-ce442.firebaseapp.com",
  databaseURL: "https://firestoredb-ce442-default-rtdb.firebaseio.com",
  projectId: "firestoredb-ce442",
  storageBucket: "firestoredb-ce442.appspot.com",
  messagingSenderId: "677716890230",
  appId: "1:677716890230:web:39c4084fc8b48c43194557"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
