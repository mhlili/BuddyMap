// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLBxjwv-KqOVHilXHvmE0Vn8erUgnPEt8",
  authDomain: "buddy-mapping-5a473.firebaseapp.com",
  projectId: "buddy-mapping-5a473",
  storageBucket: "buddy-mapping-5a473.firebasestorage.app",
  messagingSenderId: "135936622507",
  appId: "1:135936622507:web:d4327266a66fa54ce29cee",
  measurementId: "G-3WYHHEXD7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export default db; 

async function getNameTest(db) {
  const nameCol = collection(db, 'test1');
  const nameSnapshot = await getDocs(nameCol);
  const nameList = nameSnapshot.docs.map(doc => doc.data());
  return nameList;
}

firebase.initializeApp(firebaseConfig);

async function getIdToken(email, password) {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const token = await userCredential.user.getIdToken();
    console.log("Firebase ID Token:", token);
  } catch (error) {
    console.error("Error obtaining token:", error.message);
  }
}

// Replace these with the actual email and password of a Firebase Auth user
getIdToken("ethanpon17@gmail.com", "Ethan110104!");

