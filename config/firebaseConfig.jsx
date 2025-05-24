
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiRXC9chZNmh-sDysHCS-ZbSUxZhdZ0qE",
  authDomain: "e-learning-app-dee80.firebaseapp.com",
  projectId: "e-learning-app-dee80",
  storageBucket: "e-learning-app-dee80.firebasestorage.app",
  messagingSenderId: "274611102985",
  appId: "1:274611102985:web:d098cdea6c5d550de85fd8",
  measurementId: "G-XDFX1KF07E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);
const analytics = getAnalytics(app);