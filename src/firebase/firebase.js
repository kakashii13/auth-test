import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBqaz9g8-az1hN75Q1V0qTqn1ynH28Ozs",
  authDomain: "auth-test-2253a.firebaseapp.com",
  projectId: "auth-test-2253a",
  storageBucket: "auth-test-2253a.appspot.com",
  messagingSenderId: "520416649948",
  appId: "1:520416649948:web:ec6ad6a332404a896dca19",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
