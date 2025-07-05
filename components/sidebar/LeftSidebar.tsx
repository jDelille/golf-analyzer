"use client";

import React, { useState } from "react";
import { Badge, Logo, Home, Calendar, Trophy, Login } from "@/icons";
import SidebarLink from "./sidebarLink";
import { useAuth } from "@/contexts/AuthContext";
import { logout } from "@/firebase/auth";
import styles from "./Sidebar.module.scss";
import { useRouter } from "next/navigation";

type LeftSidebarProps = {};

const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <div className={styles.user}>
        <div onClick={() => router.push("/signup")}>
          <p>Create an account</p>
        </div>
      </div>
      <div className={styles.quickLinks}>
        <div className={styles.labels}>
          <p className={styles.active}>Favorites</p>
          <p className={styles.inactive}>Recently</p>
        </div>
        <ul>
          <li>Overview</li>
          <li>Badges</li>
        </ul>
      </div>
      <div className={styles.section}>
        <p className={styles.sectionLabel}>Dashboards</p>
        <SidebarLink
          icon={<Home color="#4d4d4d" size={24} />}
          label="Overview"
          href={"/overview"}
          isActive={false}
        />
        <SidebarLink
          icon={<Home color="#4d4d4d" size={24} />}
          label="Stats"
          href={"/stats"}
          isActive={false}
        />
        <p className={styles.sectionLabel}>Pages</p>
        <SidebarLink
          icon={<Home color="#4d4d4d" size={24} />}
          label="Home"
          href={"/home"}
          isActive={true}
        />
        <SidebarLink
          icon={<Calendar color="#4d4d4d" size={24} />}
          label="Calendar"
          href={"/calendar"}
          isActive={false}
        />
        <SidebarLink
          icon={<Badge color="#4d4d4d" size={23} />}
          label="Badges"
          href={"/badges"}
          isActive={false}
        />
        <SidebarLink
          icon={<Trophy color="#4d4d4d" size={24} />}
          label="Personal Records"
          href={"/personal-records"}
          isActive={false}
        />
        <SidebarLink
          icon={<Trophy color="#4d4d4d" size={24} />}
          label="Golf Bag"
          href={"/golf-bag"}
          isActive={false}
        />
        <SidebarLink
          icon={<Trophy color="#4d4d4d" size={24} />}
          label="Lessons & Tips"
          href={"/lessons"}
          isActive={false}
        />
        <SidebarLink
          icon={<Trophy color="#4d4d4d" size={24} />}
          label="Account"
          href={"/account"}
          isActive={false}
        />
        <SidebarLink
          icon={<Trophy color="#4d4d4d" size={24} />}
          label="Settings"
          href={"/settings"}
          isActive={false}
        />
      </div>
    </div>
  );
};

export default LeftSidebar;
