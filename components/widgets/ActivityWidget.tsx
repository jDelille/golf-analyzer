"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import styles from "./widget.module.scss"; 
import Link from "next/link";

type Activity = {
  id: string;
  body: string;
  href: string;
  createdAt: any; 
};

const ActivityWidget: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActivities() {
      try {
        const q = query(
          collection(db, "activities"),
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
      {activities.map((activity) => (
        <Link key={activity.id} className={styles.item} href={activity.href}>
          <p>{activity.body}</p>
          <span>{activity.createdAt?.toDate().toLocaleString()}</span>
        </Link>
      ))}
    </div>
  );
};

export default ActivityWidget;