// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKW-DjaKwB4oLP2ZguUOWOg-xYZKQS71g",
  authDomain: "fir-book-inventory-eb99e.firebaseapp.com",
  projectId: "fir-book-inventory-eb99e",
  storageBucket: "fir-book-inventory-eb99e.appspot.com",
  messagingSenderId: "200250418870",
  appId: "1:200250418870:web:c7d3218e93cacd78226817",
  measurementId: "G-EQWCR2H3SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;