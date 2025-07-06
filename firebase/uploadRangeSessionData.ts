import { auth, db } from "@/firebase/firebase";
import { collection, addDoc, serverTimestamp, query, getDocs } from "firebase/firestore";

export type ShotData = {
  Club: string;
  Index: string;
  ["Ball Speed(mph)"]: string;
  ["Launch Direction"]: string;
  ["Launch Angle"]: string;
  ["Carry(yd)"]: string;
  ["Total(yd)"]: string;
  [key: string]: string; 
};

export async function uploadRangeSession(shots: ShotData[]) {
  if (!auth.currentUser) throw new Error("User not authenticated!");

  const uid = auth.currentUser.uid;

  // Create the range session
  const sessionRef = await addDoc(
    collection(db, "users", uid, "rangeSessions"),
    {
      createdAt: serverTimestamp(),
      shotCount: shots.length,
    }
  );

  // Add shots
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

  // Add post referencing this session
  const postsCollectionRef = collection(db, "users", uid, "posts");
  const postRef = await addDoc(postsCollectionRef, {
    type: "import",
    date: serverTimestamp(),
    details: {
      itemName: `You imported a range session with ${shots.length} shots.`,
    },
    sessionId: sessionRef.id,
  });

  // Check if this is the user's first post
  const postsQuery = query(postsCollectionRef);
  const postsSnap = await getDocs(postsQuery);

  if (postsSnap.size === 1) {
    // This is the first post — add a badge
    const badgesCollectionRef = collection(db, "users", uid, "badges");
    const badgeRef = await addDoc(badgesCollectionRef, {
      badgeType: "firstPost",
      awardedAt: serverTimestamp(),
      description: "Awarded for publishing your first post!",
    });

    // Add a post announcing the new badge
    await addDoc(postsCollectionRef, {
      type: "badge",
      date: serverTimestamp(),
      details: {
        badgeType: "firstPost",
        message: "Congrats! You earned your first badge!",
      },
      badgeId: badgeRef.id,
    });
  }

  return sessionRef.id; 
}