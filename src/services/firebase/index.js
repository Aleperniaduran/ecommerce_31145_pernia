// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCTFa-TspvLeTiswXqVsfM0RMll6qisE-o",
  authDomain: "ecommerce31145-1eb10.firebaseapp.com",
  projectId: "ecommerce31145-1eb10",
  storageBucket: "ecommerce31145-1eb10.appspot.com",
  messagingSenderId: "445895611267",
  appId: "1:445895611267:web:7a79132c3a8fb9d594dcb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)