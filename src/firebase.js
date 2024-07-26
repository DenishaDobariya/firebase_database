import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };


