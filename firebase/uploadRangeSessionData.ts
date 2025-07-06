import { auth, db } from "@/firebase/firebase";
import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";

export type ShotData = {
  Club: string;
  Index: string;
  ["Ball Speed(mph)"]: string;
  ["Launch Direction"]: string;
  ["Launch Angle"]: string;
  ["Carry(yd)"]: string;
  ["Total(yd)"]: string;
  // add any other fields from your CSV you want to store
  [key: string]: string; 
};

export async function uploadRangeSession(shots: ShotData[]) {
  if (!auth.currentUser) throw new Error("User not authenticated!");

  const uid = auth.currentUser.uid;

  // Create a new range session doc
  const sessionRef = await addDoc(
    collection(db, "users", uid, "rangeSessions"),
    {
      createdAt: serverTimestamp(),
      shotCount: shots.length,
      // add other session-level metadata here if needed (e.g., location, notes)
    }
  );

  // Add each shot as a document in the session's "shots" subcollection
  const shotsCollectionRef = collection(
    db,
    "users",
    uid,
    "rangeSessions",
    sessionRef.id,
    "shots"
  );

  const addShotPromises = shots.map((shot) => addDoc(shotsCollectionRef, shot));
  await Promise.all(addShotPromises);

  return sessionRef.id; // return the session ID for redirect or confirmation
}