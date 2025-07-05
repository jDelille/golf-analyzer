import React from "react";
import styles from "./OverviewBoxes.module.scss";
import OverviewBox from "./OverviewBox";

type OverviewBoxesProps = {};
const OverviewBoxes: React.FC<OverviewBoxesProps> = () => {
  return (
    <div className={styles.overviewBoxes}>
      <OverviewBox
        title="Furthest Carry Distance"
        value={"250 yds"}
        color={"#fff"}
      />
      <OverviewBox
        title="Average Carry Distance"
        value={"227 yds"}
        color={"#fff"}
      />
      <OverviewBox title="Top Ball Speed" value={"116 mph"} color={"#fff"} />
      <OverviewBox
        title="Average Launch Angle"
        value={"14.5°"}
        color={"#fff"}
      />
      <OverviewBox title="Favorite Club" value={"9 Iron"} color={"#fff"} />
    </div>
  );
};

export default OverviewBoxes;
