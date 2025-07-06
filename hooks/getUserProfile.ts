import { doc, getDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import { db, auth } from "@/firebase/firebase";
import { UserProfile, UserProfileWithPosts } from "@/types/userProfile";
import { PostData } from "@/types/post";

export default async function getUserProfileAndPosts(): Promise<UserProfileWithPosts> {
  if (!auth.currentUser) throw new Error("No authenticated user!");

  const uid = auth.currentUser.uid;

  const userDocRef = doc(db, "users", uid);
  const userSnap = await getDoc(userDocRef);

  let profile: UserProfile | null = null;
  if (userSnap.exists()) {
    profile = userSnap.data() as UserProfile;
    console.log("Fetched user profile from Firestore:", profile);
  } else {
    console.error("No user profile found in Firestore!");
  }

  const postsRef = collection(db, "users", uid, "posts");
  const postsQuery = query(postsRef, orderBy("date", "desc"));
  const postsSnap = await getDocs(postsQuery);

  const posts: PostData[] = postsSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  } as PostData));

  console.log("Fetched user posts from Firestore:", posts);

  return { profile, posts };
}