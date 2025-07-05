import React from "react";
import styles from "./dropdown.module.scss";
import Link from "next/link";

type Notifications = {
  id: string;
  name: string;
  date: string;
  href: string;
}[];

type NotificationsDropdownProps = {
  notifications: Notifications;
};

const NotificationsDropdown: React.FC<NotificationsDropdownProps> = ({
  notifications,
}) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.notifHeader}>
        <p>Notifications</p>
      </div>

      <div className={styles.notifications}>
        {notifications.map((notification) => (
          <Link
            key={notification.id}
            href={notification.id}
            className={styles.notification}
          >
            {notification.name}
            <span>{notification.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotificationsDropdown;
