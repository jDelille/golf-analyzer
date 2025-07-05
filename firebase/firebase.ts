import { initializeApp, FirebaseApp, getApps } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

const firebaseConfig: {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
} = {
  apiKey: "AIzaSyBb-EDymc_50uEiPWg6sRUoKaUIj4JDQfY",
  authDomain: "golf-app-f51d6.firebaseapp.com",
  projectId: "golf-app-f51d6",
  storageBucket: "golf-app-f51d6.firebasestorage.app",
  messagingSenderId: "166893343128",
  appId: "1:166893343128:web:3bb392d9a74618dbb01bed"
};

const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);