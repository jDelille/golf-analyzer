"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase";
import styles from "./Notifications.module.scss";
import Link from "next/link";

type Notification = {
  id: string;
  message: string;
  createdAt: any;
  href?: string; // optional, in case you want to add links later
};

type NotificationWidgetProps = {};
const NotificationWidget: React.FC<NotificationWidgetProps> = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        if (!auth.currentUser) {
          console.error("User not authenticated, cannot fetch notifications.");
          setLoading(false);
          return;
        }

        const uid = auth.currentUser.uid;

        const q = query(
          collection(db, "users", uid, "notifications"),
          orderBy("createdAt", "desc")
        );

        const querySnapshot = await getDocs(q);

        const notifData: Notification[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Notification, "id">),
        }));

        setNotifications(notifData);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNotifications();
  }, []);

  return (
    <div className={styles.notificationWidget}>
      <div className={styles.label}>
        <p>Notifications</p>
      </div>
      {loading && <p>Loading notifications...</p>}
      {!loading && notifications.length === 0 && <p>No notifications yet.</p>}
      {notifications.map((notif, index) => {
        if (index < 3) {
          return (
            <div key={notif.id} className={styles.notification}>
              {notif.href ? (
                <Link href={notif.href}>
                  <p>{notif.message}</p>
                  <span>{notif.createdAt?.toDate().toLocaleString()}</span>
                </Link>
              ) : (
                <>
                  <p>{notif.message}</p>
                  <span>{notif.createdAt?.toDate().toLocaleString()}</span>
                </>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default NotificationWidget;
