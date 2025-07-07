"use client";

import React, { useEffect, useState } from "react";
import { Badge, Home, Calendar, Trophy } from "@/icons";
import SidebarLink from "./sidebarLink";
import { useAuth } from "@/contexts/AuthContext";
import { logout } from "@/firebase/auth";
import styles from "./Sidebar.module.scss";
import { useRouter } from "next/navigation";
import getUserProfile from "@/hooks/getUserProfile";
import { UserProfileWithPosts } from "@/types/userProfile";


type LeftSidebarProps = {};

const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfileWithPosts | null>(null);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    async function fetchProfile() {
      setLoading(true);
      try {
        const userData = await getUserProfile();
        setProfile(userData);
      } catch (err) {
        console.error(err);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [user]);

  const userInfo = profile?.profile;

  return (
    <div className={styles.sidebar}>
      <div className={styles.user}>
        {authLoading || loading ? (
          <p>Loading...</p>
        ) : !user ? (
          <div onClick={() => router.push("/signup")} className={styles.profileName}>
            <p>Create an account</p>
          </div>
        ) : (
          <div onClick={() => router.push("/profile")} className={styles.profileName}>
            <img src={userInfo?.avatar} alt={userInfo?.displayName} />
            <p>{userInfo?.displayName || user.email}</p>
          </div>
        )}
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
          isActive={false}
        />
        <SidebarLink
          icon={<Home color="#4d4d4d" size={24} />}
          label="Recent Activity"
          href={"/recent-activity"}
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
