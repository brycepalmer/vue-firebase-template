import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} = import.meta.env;


const firebaseConfig = {
  apiKey: FIREBASE_API_KEY?.toString(),
  authDomain: FIREBASE_AUTH_DOMAIN?.toString(),
  projectId: FIREBASE_PROJECT_ID?.toString(),
  storageBucket: FIREBASE_STORAGE_BUCKET?.toString(),
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID?.toString(),
  appId: FIREBASE_APP_ID?.toString(),
};

initializeApp(firebaseConfig);

const auth = getAuth();

export default auth;
