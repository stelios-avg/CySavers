// services/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';




// Αντικατέστησε 
const firebaseConfig = {
  apiKey: "AIzaSyBmxGKfdxTi4V4dAO-B0d89D7wDbDln3so",
  authDomain: "cysaver-5c128.firebaseapp.com",
  projectId: "cysaver-5c128",
  storageBucket: "cysaver-5c128.firebasestorage.app",
  messagingSenderId: "808469786120",
  appId: "1:808469786120:web:3c854915c68d3b1542abbd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);