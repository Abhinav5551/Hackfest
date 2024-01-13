import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD8hPG8AcNfSmaycMdcr5scJjO7LhqgR6o",
  authDomain: "clean-streets-9b9fb.firebaseapp.com",
  databaseURL: "https://clean-streets-9b9fb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clean-streets-9b9fb",
  storageBucket: "clean-streets-9b9fb.appspot.com",
  messagingSenderId: "125725420979",
  appId: "1:125725420979:web:5694fa71f6bbb4c9e46fc6",
  measurementId: "G-Y717LZHVGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;