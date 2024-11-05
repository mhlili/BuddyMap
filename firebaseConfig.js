// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';


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
const db = getFirestore(app);

export async function addData() {
  try {
    const docRef = await addDoc(collection(db, "test1"), {
      name: "Tokyo",
      country: "Japan"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}