// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBTtYrrZV9yo-54UlxBwW3-d7y_MLwSxn4",
  authDomain: "iboss-task.firebaseapp.com",
  projectId: "iboss-task",
  storageBucket: "iboss-task.appspot.com",
  messagingSenderId: "674686453721",
  appId: "1:674686453721:web:d40aba407b1d607f8b7bc8",
  measurementId: "G-45FY91PJVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;