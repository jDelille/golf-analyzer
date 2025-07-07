"use client";

import React from "react";
import styles from "./BadgeDisplay.module.scss";
import { badges } from "@/badges/badges";
import Badge from "./Badge";
import { useUserBadges } from "@/hooks/getUserBadges";

type BadgeDisplayProps = {};
const BadgeDisplay: React.FC<BadgeDisplayProps> = () => {
  const badgeList = badges;

 const {earnedBadgeIds} = useUserBadges();


  const sortedBadges = badgeList.slice().sort((a, b) => {
    const aEarned = earnedBadgeIds.includes(a.id);
    const bEarned = earnedBadgeIds.includes(b.id);

    if (aEarned === bEarned) return 0;
    return aEarned ? -1 : 1;
  });

  console.log(earnedBadgeIds)

  return (
    <div className={styles.badgeDisplay}>
       {sortedBadges.map((badge) => (
        <Badge
          key={badge.id}
          badge={badge}
          earned={earnedBadgeIds.includes(badge.id as string)}
        />
      ))}
    </div>
  );
};

export default BadgeDisplay;
