import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Enforce environment variables via Vite import.meta.env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Guard warning if environment variables are not found
if (!firebaseConfig.apiKey) {
  console.error(
    'Firebase environment variables missing! Please configure .env locally or add VITE_FIREBASE_* variables in Vercel Project Settings.'
  );
}

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore Database
export const db = getFirestore(app);
