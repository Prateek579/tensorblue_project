// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCun38CQR8YsqxXg2NF99UOWoEynpLVlyU",
  authDomain: "student-information-2df4b.firebaseapp.com",
  projectId: "student-information-2df4b",
  storageBucket: "student-information-2df4b.appspot.com",
  messagingSenderId: "372016079919",
  appId: "1:372016079919:web:60b45e7487043271d012da",
  measurementId: "G-3H8KDTN3KM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);