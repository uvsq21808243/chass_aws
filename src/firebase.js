import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

//you can either add your firebase config directly like in the tutorial or can also add it as an 
//json string like here https://create-react-app.dev/docs/adding-custom-environment-variables/

const firebaseConfig = {
  apiKey: "AIzaSyBfGDwOsRmzz2EDTi_1mf8fYm0ApX-Gvnw",
  authDomain: "onlinechess-211a7.firebaseapp.com",
  projectId: "onlinechess-211a7",
  storageBucket: "onlinechess-211a7.appspot.com",
  messagingSenderId: "492184298427",
  appId: "1:492184298427:web:43f883ef0e7acee498da9e",
  measurementId: "G-678FJZ6LKE"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase