"use client";

import React from "react";
import styles from "./BadgeDisplay.module.scss";
import { badges } from "@/badges/badges";
import Badge from "./Badge";
import { useUserBadges } from "@/hooks/getUserBadges";

type BadgeDisplayProps = {};
const BadgeDisplay: React.FC<BadgeDisplayProps> = () => {
  const badgeList = badges;

  const { earnedBadges } = useUserBadges();

  // Sort badges: unlocked first
  const sortedBadges = badgeList.slice().sort((a, b) => {
    const aEarned = a.id in earnedBadges;
    const bEarned = b.id in earnedBadges;

    if (aEarned === bEarned) return 0;
    return aEarned ? -1 : 1;
  });

  return (
    <div className={styles.badgeDisplay}>
      {sortedBadges.map((badge) => {
        const earned = badge.id in earnedBadges;
        const unlockedDate = earned ? earnedBadges[badge.id] : null;

        return (
          <Badge
            key={badge.id}
            badge={badge}
            earned={earned}
            unlockedDate={unlockedDate} // pass unlocked date as a prop
          />
        );
      })}
    </div>
  );
};

export default BadgeDisplay;