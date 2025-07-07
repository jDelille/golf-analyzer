import { auth, db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

type ClubMaxCarry = {
  carry: number;
  shotId: string;
  sessionId: string;
};

export async function getMaxCarryPerClub(): Promise<Record<string, ClubMaxCarry>> {
  if (!auth.currentUser) throw new Error("User not authenticated!");

  const uid = auth.currentUser.uid;
  const rangeSessionsRef = collection(db, "users", uid, "rangeSessions");
  const sessionsSnapshot = await getDocs(rangeSessionsRef);
  if (sessionsSnapshot.empty) return {};

  const maxCarryByClub: Record<string, ClubMaxCarry> = {};

  for (const sessionDoc of sessionsSnapshot.docs) {
    const sessionId = sessionDoc.id;
    const shotsRef = collection(db, "users", uid, "rangeSessions", sessionId, "shots");
    const shotsSnapshot = await getDocs(shotsRef);

    shotsSnapshot.forEach((shotDoc) => {
      const shotData = shotDoc.data();
      const club = shotData["Club"];
      const carryStr = shotData["Carry(yd)"];
      const carryNum = typeof carryStr === "string" ? parseFloat(carryStr) : 0;

      if (!club) return; // ignore shots without club

      const currentMax = maxCarryByClub[club];
      if (!currentMax || carryNum > currentMax.carry) {
        maxCarryByClub[club] = {
          carry: carryNum,
          shotId: shotDoc.id,
          sessionId,
        };
      }
    });
  }

  return maxCarryByClub;
}