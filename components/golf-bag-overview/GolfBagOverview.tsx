import React from "react";
import styles from "./GolfBagOverview.module.scss";

type GolfBagOverviewProps = {};
const GolfBagOverview: React.FC<GolfBagOverviewProps> = () => {
  return (
    <div className={styles.golfBagOverview}>
      <div className={styles.title}>
        <p>Golf Bag</p>
        <span>Edit</span>
      </div>

      <ul className={styles.clubs}>
        <li>
          Driver
          <span>230yd</span>
        </li>
        <li>
          3 Wood
          <span>210yd</span>
        </li>
        <li>
          3 Hybrid
          <span>200yd</span>
        </li>
        <li>
          5 Hybrid
          <span>180yd</span>
        </li>
        <li>
          4 Iron
          <span>170yd</span>
        </li>
        <li>
          5 Iron
          <span>160yd</span>
        </li>
        <li>
          6 Iron
          <span>150yd</span>
        </li>
        <li>
          7 Iron
          <span>140yd</span>
        </li>
        <li>
          8 Iron
          <span>130yd</span>
        </li>
        <li>
          9 Iron
          <span>120yd</span>
        </li>
        <li>
          Pitching Wedge
          <span>110yd</span>
        </li>
        <li>
          Gap Wedge
          <span>100yd</span>
        </li>
        <li>
          Sand Wedge
          <span>90yd</span>
        </li>
      </ul>
    </div>
  );
};

export default GolfBagOverview;
