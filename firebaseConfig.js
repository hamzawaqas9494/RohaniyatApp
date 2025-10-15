// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpEhLh-hE5yjiJz5HFcAOPbSJSxYMCgvo",
  authDomain: "idararohaniyat-1cbcd.firebaseapp.com",
  projectId: "idararohaniyat-1cbcd",
  storageBucket: "idararohaniyat-1cbcd.appspot.com",
  messagingSenderId: "886103293297",
  appId: "1:886103293297:web:25d1c9b248ec08585f8ad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Messaging for Web (optional, only needed for push notifications)
export const messaging = getMessaging(app);

export default app;
