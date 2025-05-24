// seedCourses.js

import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { coursesData } from "./constants/CoursesData.js";

// Firebase config (poți importa și direct din alt fișier dacă îl ai separat)
const firebaseConfig = {
  apiKey: "AIzaSyBiRXC9chZNmh-sDysHCS-ZbSUxZhdZ0qE",
  authDomain: "e-learning-app-dee80.firebaseapp.com",
  projectId: "e-learning-app-dee80",
  storageBucket: "e-learning-app-dee80.appspot.com",
  messagingSenderId: "274611102985",
  appId: "1:274611102985:web:d098cdea6c5d550de85fd8",
  measurementId: "G-XDFX1KF07E"
};

// Inițializare Firebase și Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedCourses() {
  for (const course of coursesData) {
    const docId = Date.now().toString() + Math.random().toString(36).slice(2);
    await setDoc(doc(db, "courses", docId), {
      ...course,
      createdOn: new Date(),
      createdBy: "admin-script",
      docId,
    });
    console.log(`✔️ Cursul "${course.title}" a fost adăugat cu succes.`);
  }

  console.log("✅ Toate cursurile au fost adăugate.");
}

seedCourses().catch((error) => {
  console.error("❌ Eroare la adăugare:", error.message || error);
});
