import React from 'react';
import styles from './BadgeDisplay.module.scss';
import { badges } from '@/badges/badges';
import Badge from './Badge';

type BadgeDisplayProps = {
 
 }
const BadgeDisplay: React.FC<BadgeDisplayProps> = () => {
        const badgeList = badges;

  return (
    <div className={styles.badgeDisplay}>
      {badgeList.map((badge) => (
        <Badge badge={badge} />
      ))}
    </div>
  );
};

export default BadgeDisplay;