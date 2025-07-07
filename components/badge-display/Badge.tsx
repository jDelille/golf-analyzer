import React from "react";
import styles from "./BadgeDisplay.module.scss";

type BadgeProps = {
  badge: any;
  earned: boolean;
  unlockedDate?: Date | null;
};
const Badge: React.FC<BadgeProps> = ({ badge, earned, unlockedDate }) => {
  return (
    <div className={earned ? styles.unlocked : styles.locked}>
      <div className={styles.imgContainer}>
        <img
          src={badge.icon}
          alt={badge.label}
          className={!earned ? styles.lockedImg : ""}
          style={{ opacity: earned ? 1 : 0.3 }}
        />
      </div>
      <div className={styles.badgeText}>
        <p className={styles.badgeName}>
          {badge.label}
          {earned && unlockedDate ? (
            <small>Unlocked {unlockedDate.toLocaleDateString()}</small>
          ): (
            <small>Locked</small>
          )}
        </p>
        <p className={styles.description}>{badge.description}</p>
      </div>
    </div>
  );
};

export default Badge;
