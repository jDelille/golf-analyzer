import React from "react";
import styles from "./BadgeDisplay.module.scss";

type BadgeProps = {
  badge: any;
  earned: boolean;
};
const Badge: React.FC<BadgeProps> = ({ badge, earned }) => {
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
      <p>{badge.label}</p>
      <p>{badge.description}</p>
    </div>
  );
};

export default Badge;
