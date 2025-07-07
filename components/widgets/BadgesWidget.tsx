import React from "react";
import styles from "./widget.module.scss";
import { badges } from "@/badges/badges";

type Badge = {
  id: string;
  label: string;
  icon: string;
};

type BadgesProps = {};

const BadgesWidget: React.FC<BadgesProps> = () => {
  const allBadges = badges;

  const earnedBadgeIds = [
    "speed-100",
    "carry-king",
    "full-bag",
    "tee-off",
    "add-course",
  ]; // example user data

  return (
    <div className={styles.widget}>
      <div className={styles.label}>
        <p>Badges</p>
      </div>
      <div className={styles.badgeGrid}>
        {allBadges.map((badge, index) => {
          const earned = earnedBadgeIds.includes(badge.id);
          if (index < 7) {
            return (
              <div
                key={badge.id}
                className={`${styles.badge} ${
                  earned ? styles.earned : styles.locked
                }`}
              >
                <img
                  src={badge.icon}
                  alt={badge.label}
                  className={styles.badgeIcon}
                  style={{ opacity: earned ? 1 : 0.3 }}
                />
                <div className={styles.hovered}>
                    <p>{badge.description}</p>
                </div>
              </div>
            );
          }
        })}
        <div className={styles.seeAll}>+52</div>
      </div>
    </div>
  );
};

export default BadgesWidget;
