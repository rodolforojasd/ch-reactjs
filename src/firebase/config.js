import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAWKWiEUDAVc_Ve8ri6dUp51NOvPJxNECs",
  authDomain: "ch-reactjs-25654.firebaseapp.com",
  projectId: "ch-reactjs-25654",
  storageBucket: "ch-reactjs-25654.appspot.com",
  messagingSenderId: "56930830704",
  appId: "1:56930830704:web:4ebb31699ef19d88c6e7b5"
};

 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)