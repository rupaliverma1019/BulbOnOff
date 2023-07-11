// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA0wKmRMDifkU6mUrLVcp4hnVR05p3ToLI",
  authDomain: "login-f058c.firebaseapp.com",
  projectId: "login-f058c",
  storageBucket: "login-f058c.appspot.com",
  messagingSenderId: "112713196954",
  appId: "1:112713196954:web:b9d1544e40ab33fcf90623",
  measurementId: "G-DHTHP7GW6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
