"use client";

import React, { useEffect, useState } from "react";
import styles from "./RecentActivity.module.scss";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useAuth } from "@/contexts/AuthContext";

type Shot = {
  id: string;
  [key: string]: any; // individual shot fields
};

type RangeSession = {
  id: string;
  // createdAt: any; // Firestore Timestamp
  shots: Shot[];
};

const RecentActivity: React.FC = () => {
  const { user } = useAuth();
  const [sessions, setSessions] = useState<RangeSession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    async function fetchSessions() {
      if (!user) return;
      try {
        const q = query(
          collection(db, "users", user.uid, "rangeSessions"),
          orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);

        const sessionsData = await Promise.all(
          querySnapshot.docs.map(async (sessionDoc) => {
            const sessionId = sessionDoc.id;
            const sessionData = sessionDoc.data();

            // Fetch shots subcollection for this session
            const shotsRef = collection(
              db,
              "users",
              user.uid,
              "rangeSessions",
              sessionId,
              "shots"
            );
            const shotsSnapshot = await getDocs(shotsRef);
            const shots = shotsSnapshot.docs.map((shotDoc) => ({
              id: shotDoc.id,
              ...shotDoc.data(),
            }));

            return {
              id: sessionId,
              ...sessionData,
              shots,
            };
          })
        );

        setSessions(sessionsData);
      } catch (error) {
        console.error("Error fetching sessions and shots:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSessions();
  }, [user]);

  console.log(sessions);

  return (
    <div className={styles.recentActivity}>
      <div className={styles.tableContainer}>
        <table className={styles.statTable}>
          <thead>
            <tr>
              <th>Club</th>
              <th>Ball Speed</th>
              <th>D. Loft</th>
              <th>Carry</th>
              <th>Total</th>
              <th>Apex</th>
              <th>Offline</th>
            </tr>
          </thead>
          <tbody>
            {sessions[0]?.shots
              .filter((shot) => shot.Club)
              .sort((a, b) => a.Club.localeCompare(b.Club))
              .map((shot) => (
                <tr key={shot.id} className={styles.shot}>
                  <td>{shot.Club}</td>
                  <td>{shot["Ball Speed(mph)"]} mph</td>
                  <td>{shot[" Dynamic Loft"]} deg</td>
                  <td>{shot["Carry(yd)"]} yds</td>
                  <td>{shot["Total(yd)"]} yds</td>
                  <td>{shot["Apex(yd)"]} yds</td>
                  <td>{shot["Offline(yd)"]} yds</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;
