import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCOLouwLpUPx7f1vvEu2qmHYrLTo5uqTJg",
  authDomain: "countriesdb-a00c2.firebaseapp.com",
  databaseURL: "https://countriesdb-a00c2-default-rtdb.firebaseio.com",
  projectId: "countriesdb-a00c2",
  storageBucket: "countriesdb-a00c2.appspot.com",
  messagingSenderId: "710665309116",
  appId: "1:710665309116:web:c8363fe1ecd97a791839b9",
  measurementId: "G-S72VM39F6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();