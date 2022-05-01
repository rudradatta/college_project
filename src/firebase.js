
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCD30F3Qbgfs86y81s9QcannhkL3hk1QL8",
    authDomain: "beaming-night-288405.firebaseapp.com",
    projectId: "beaming-night-288405",
    storageBucket: "beaming-night-288405.appspot.com",
    messagingSenderId: "812128358212",
    appId: "1:812128358212:web:96f0a20c4c5010c7161111",
    measurementId: "G-G1QYRDV6W8"
  };


const firebaseApp  = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();//THis will tell firebase that we want the google login servers

export { auth, provider};