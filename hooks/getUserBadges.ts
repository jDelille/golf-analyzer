import { useEffect, useState } from "react";
import { auth, db } from "@/firebase/firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";

type BadgeData = {
  badgeType: string;
  awardedAt: Timestamp; 
};

export function useUserBadges() {
  const [earnedBadges, setEarnedBadges] = useState<Record<string, Date>>({});

  useEffect(() => {
    async function fetchBadges() {
      if (!auth.currentUser) {
        setEarnedBadges({});
        return;
      }

      const uid = auth.currentUser.uid;
      const badgesCollectionRef = collection(db, "users", uid, "badges");
      const badgesSnap = await getDocs(badgesCollectionRef);

      const badgesData: Record<string, Date> = {};
      badgesSnap.docs.forEach((doc) => {
        const data = doc.data() as BadgeData;
        if (data.badgeType && data.awardedAt) {
          badgesData[data.badgeType] = data.awardedAt.toDate();
        }
      });

      setEarnedBadges(badgesData);
    }

    fetchBadges();
  }, []);

  return { earnedBadges };
}