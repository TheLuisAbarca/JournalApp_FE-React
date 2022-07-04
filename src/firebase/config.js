// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyC4SUyJeO87O-3WvRVAbvwDRxG8197qz2M",
    authDomain: "react-reduxtoolkit.firebaseapp.com",
    projectId: "react-reduxtoolkit",
    storageBucket: "react-reduxtoolkit.appspot.com",
    messagingSenderId: "554095870111",
    appId: "1:554095870111:web:71a60f14a0831cb03f22aa"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const CloudFirestore = getFirestore(FirebaseApp);