import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBAm7VSzEatFAh3FJ5UQSjHQwZQ9I3mV5w",
  authDomain: "zonaeduca-cf57e.firebaseapp.com",
  projectId: "zonaeduca-cf57e",
  storageBucket: "zonaeduca-cf57e.appspot.com",
  messagingSenderId: "454806324057",
  appId: "1:454806324057:web:6e3214e4d251695aee0248"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);