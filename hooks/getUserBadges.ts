import { useEffect, useState } from "react";
import { auth, db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export function useUserBadges() {
  const [earnedBadgeIds, setEarnedBadgeIds] = useState<string[]>([]);

  useEffect(() => {
    async function fetchBadges() {
      if (!auth.currentUser) {
        setEarnedBadgeIds([]);
        return;
      }

      const uid = auth.currentUser.uid;
      const badgesCollectionRef = collection(db, "users", uid, "badges");
      const badgesSnap = await getDocs(badgesCollectionRef);

      const badgeTypes = badgesSnap.docs.map(doc => doc.data().badgeType as string);

      setEarnedBadgeIds(badgeTypes);
    }

    fetchBadges();
  }, []);

  return { earnedBadgeIds };
}
