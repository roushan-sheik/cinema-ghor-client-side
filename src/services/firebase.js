// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const some = import.meta.env.AUTH_APIKEY;
console.log(some);
const firebaseConfig = {
  apiKey: "AIzaSyDyeXPpsEb9xCtg1ZOvZjRXRIR1ztQd1ak",
  authDomain: "blog-management-app-bc38c.firebaseapp.com",
  projectId: "blog-management-app-bc38c",
  storageBucket: "blog-management-app-bc38c.appspot.com",
  messagingSenderId: "1036619558753",
  appId: "1:1036619558753:web:204b85833419ce21999f20",
  measurementId: "G-R1D4DH1RS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
