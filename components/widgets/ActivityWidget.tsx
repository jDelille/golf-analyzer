"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase";
import styles from "./widget.module.scss"; 
import Link from "next/link";

type Activity = {
  id: string;
  message: string;
  createdAt: any;
  href?: string; 
};

const ActivityWidget: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActivities() {
      try {
        if (!auth.currentUser) {
          console.error("User not authenticated, cannot fetch activities.");
          setLoading(false);
          return;
        }

        const uid = auth.currentUser.uid;

        const q = query(
          collection(db, "users", uid, "activity"),
          orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);

        const activityData: Activity[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Activity, "id">),
        }));

        setActivities(activityData);
      } catch (error) {
        console.error("Failed to fetch activities:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchActivities();
  }, []);

  return (
    <div className={styles.widget}>
      <div className={styles.label}>
        <p>Recent Activities</p>
      </div>
      {loading && <p>Loading activities...</p>}
      {!loading && activities.length === 0 && <p>No recent activities yet.</p>}
      {activities.map((activity) => (
        <div key={activity.id} className={styles.item}>
          {activity.href ? (
            <Link href={activity.href}>
              <p>{activity.message}</p>
              <span>{activity.createdAt?.toDate().toLocaleString()}</span>
            </Link>
          ) : (
            <>
              <p>{activity.message}</p>
              <span>{activity.createdAt?.toDate().toLocaleString()}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ActivityWidget;