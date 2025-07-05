"use client";

import React, { useEffect, useState } from "react";
import styles from "./ProfileHeader.module.scss";
import { UserProfile } from "@/types/getUserProfile";
import getUserProfile from "@/hooks/getUserProfile";

type ProfileHeaderProps = {};
const ProfileHeader: React.FC<ProfileHeaderProps> = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <div className={styles.profileHeader}>
      <div className={styles.avatarContainer}>
        {/* <img
          src={profile?.avatar}
          alt={profile?.displayName}
          className={styles.avatar}
        /> */}
      </div>
      {/* <div className={styles.text}>
        <h2>{profile?.displayName}</h2>
        <p>5 Handicap</p>
      </div> */}
    </div>
  );
};

export default ProfileHeader;
