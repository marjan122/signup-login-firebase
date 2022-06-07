import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoYgnMHWzdhlsOF_NHqzmTWQ-jNoksIQk",
  authDomain: "signup-login-form-c6f6e.firebaseapp.com",
  projectId: "signup-login-form-c6f6e",
  storageBucket: "signup-login-form-c6f6e.appspot.com",
  messagingSenderId: "710335816757",
  appId: "1:710335816757:web:a8435554ae2fd941887d7c",
  measurementId: "G-TG2H7XHN4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;