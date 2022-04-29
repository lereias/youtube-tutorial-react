// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAklFSfBpg_K44V1lgrxc3joxW-aPskCao",
  authDomain: "fir-react-66295.firebaseapp.com",
  projectId: "fir-react-66295",
  storageBucket: "fir-react-66295.appspot.com",
  messagingSenderId: "938499557655",
  appId: "1:938499557655:web:f4daddb409b50ee9c48f52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize firestore
export const db = getFirestore(app);