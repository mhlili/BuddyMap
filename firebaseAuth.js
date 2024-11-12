import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from 'firebase/auth';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import db  from '@/firebaseConfig';
import { auth } from './firebaseConfig';


// Function to register a new user
const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User registered:', user);
  } catch (error) {
    console.error('Error registering user:', error.message);
  }
};

export default registerUser;

// Function to sign in a user
const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User signed in:', user);
  } catch (error) {
    console.error('Error signing in user:', error.message);
  }
};


const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Error signing out user:', error.message);
  }
};



const addData = async (username, email, password) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      username: {username},
      email: {email},
      password:{password}
    });
    console.log('Document written with ID:', docRef.id);
  } catch (error) {
    console.error('Error adding document:', error.message);
  }
};

const fetchData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  } catch (error) {
    console.error('Error fetching documents:', error.message);
  }
};


