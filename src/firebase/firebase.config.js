// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7eRvWdnLqh2urM_jAuBFHFlddSoBBpfA",
  authDomain: "pawmart-assignment.firebaseapp.com",
  projectId: "pawmart-assignment",
  storageBucket: "pawmart-assignment.firebasestorage.app",
  messagingSenderId: "984067907073",
  appId: "1:984067907073:web:6479da456770a5a78eaa00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;