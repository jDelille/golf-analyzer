import React from "react";
import styles from "./BadgeDisplay.module.scss";

type BadgeProps = {
  badge: any;
};
const Badge: React.FC<BadgeProps> = ({ badge }) => {
  return (
    <div className={styles.badge}>
      <div className={styles.imgContainer}>
        <img src={badge.icon} alt="" />
      </div>
      <p>{badge.label}</p>
      <p>{badge.description}</p>
    </div>
  );
};

export default Badge;
