import React from "react";
import {
  ActivityWidget,
  BadgesWidget,
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
      <BadgesWidget />
      <LeaderboardWidget />
    </div>
  );
};

export default RightSidebar;
