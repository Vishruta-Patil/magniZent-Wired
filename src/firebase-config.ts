import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAQ-5QSwKSrMBRQxc5g00jUtMtCFXMbiAI",
  authDomain: "magnizent-wired.firebaseapp.com",
  projectId: "magnizent-wired",
  storageBucket: "magnizent-wired.appspot.com",
  messagingSenderId: "778518982915",
  appId: "1:778518982915:web:f3828ebde3b8c74c51b936",
  measurementId: "G-DHT8NSDWWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export {auth}