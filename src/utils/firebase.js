import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHAlYZFHC8WkJ1Ryah0nGt0J3PL6Oxxek",
  authDomain: "heydaisy-9c85a.firebaseapp.com",
  projectId: "heydaisy-9c85a",
  storageBucket: "heydaisy-9c85a.appspot.com",
  messagingSenderId: "348222958533",
  appId: "1:348222958533:web:611eaf4c86c911cd0af9ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
