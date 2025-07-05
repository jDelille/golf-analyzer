import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { auth } from "@/firebase/firebase";
import { UserProfile } from "@/types/getUserProfile";

export default async function getUserProfile(): Promise<UserProfile | null> {
  if (!auth.currentUser) throw new Error("No authenticated user!");

  const uid = auth.currentUser.uid;
  const userDocRef = doc(db, "users", uid);
  const userSnap = await getDoc(userDocRef);

  if (userSnap.exists()) {
    const userData = userSnap.data() as UserProfile;
    console.log("Fetched user data from Firestore:", userData);
    return userData;
  } else {
    console.error("No user profile found in Firestore!");
    return null;
  }
}