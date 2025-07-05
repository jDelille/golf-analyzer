"use client";

import React, { useEffect, useState } from "react";
import styles from "./widget.module.scss";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import Link from "next/link";

type LeaderboardWidgetProps = {};

type Leaderboard = {
  id: string;
  href: string;
  displayName: string;
  avatar: string;
  points: number;
};
const LeaderboardWidget: React.FC<LeaderboardWidgetProps> = () => {
  const [leaderboard, setLeaderboard] = useState<Leaderboard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const q = query(
          collection(db, "leaderboard"),
          orderBy("points", "desc")
        );

        const querySnapshot = await getDocs(q);

        const leaderboardData: Leaderboard[] = querySnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<Leaderboard, "id">),
          })
        );
        setLeaderboard(leaderboardData);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);
  return (
    <div className={styles.widget}>
      <div className={styles.label}>
        <p>Leaderboard</p>
      </div>
      {leaderboard.map((user) => (
        <Link key={user.id} className={styles.item} href={user.href}>
          <div className={styles.user}>
            <img src={user.avatar} alt={user.displayName} />
            <p>{user.displayName}</p>
            <p className={styles.points}>{user.points}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LeaderboardWidget;
