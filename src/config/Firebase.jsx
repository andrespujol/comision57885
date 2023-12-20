// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import productos from "../data/asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain:import.meta.env.VITE_FIREBASE_AUTHDOMAIN ,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID
};

console.log('config se conectó')

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


// productos.forEach((producto) => {
//     addDoc(collection(db, 'productos'), producto)
//         .then((docRef) => {
//             console.log(`se agregó el documento con id: ${docRef.id}`)
//         })
//         .catch((error) => console.log(error))
// })