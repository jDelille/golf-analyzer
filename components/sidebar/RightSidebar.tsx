import React from "react";
import {
  ActivityWidget,
  LeaderboardWidget,
  NotificationWidget,
} from "../widgets";
import styles from "./Sidebar.module.scss";

type RightSidebarProps = {};
const RightSidebar: React.FC<RightSidebarProps> = () => {
  return (
    <div className={styles.sidebarRight}>
      <NotificationWidget />
      <ActivityWidget />
      <LeaderboardWidget />
    </div>
  );
};

export default RightSidebar;
