import React from 'react';
import styles from './OverviewBoxes.module.scss';

type OverviewBoxProps = {
    title: string;
    value: string;
    color: string;
 }
const OverviewBox: React.FC<OverviewBoxProps> = ({title, value, color}) => {
  return (
    <div className={styles.overviewBox} style={{backgroundColor: color}}>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default OverviewBox;