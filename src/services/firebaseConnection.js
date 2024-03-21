
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA5KnMsnWkYDPxfNzFAcl_zZeqc3wtVN1c",
  authDomain: "tickets-4279a.firebaseapp.com",
  projectId: "tickets-4279a",
  storageBucket: "tickets-4279a.appspot.com",
  messagingSenderId: "218552679221",
  appId: "1:218552679221:web:260a2bfd2902e96f302a7c"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };