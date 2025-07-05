"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import styles from "./Notifications.module.scss";
import Link from "next/link";

type Notification = {
  id: string;
  body: string;
  href: string;
  createdAt: any;
};

type NotificationWidgetProps = {};
const NotificationWidget: React.FC<NotificationWidgetProps> = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const q = query(
          collection(db, "notifications"),
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
      {notifications.map((notif) => (
        <Link key={notif.id} className={styles.notification} href={notif.href}>
          <p>{notif.body}</p>
          <span>{notif.createdAt?.toDate().toLocaleString()}</span>
        </Link>
      ))}
    </div>
  );
};

export default NotificationWidget;
