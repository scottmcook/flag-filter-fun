// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOLouwLpUPx7f1vvEu2qmHYrLTo5uqTJg",
  authDomain: "countriesdb-a00c2.firebaseapp.com",
  projectId: "countriesdb-a00c2",
  storageBucket: "countriesdb-a00c2.appspot.com",
  messagingSenderId: "710665309116",
  appId: "1:710665309116:web:c8363fe1ecd97a791839b9",
  measurementId: "G-S72VM39F6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);