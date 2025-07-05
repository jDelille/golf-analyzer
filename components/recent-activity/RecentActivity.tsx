import React from 'react';
import styles from './RecentActivity.module.scss';

type RecentActivityProps = {
 
 }
const RecentActivity: React.FC<RecentActivityProps> = () => {
  return (
    <div className={styles.recentActivity}>
      <div className={styles.title}>
        <p>Recent Activity</p>
      </div>
    </div>
  );
};

export default RecentActivity;