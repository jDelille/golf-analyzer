"use client";

import React from "react";
import styles from "./ProfileHeader.module.scss";
import { UserProfile } from "@/types/userProfile";

type ProfileHeaderProps = {
  user: UserProfile;
};
const ProfileHeader: React.FC<ProfileHeaderProps> = ({user}) => {

  return (
    <div className={styles.profileHeader}>
      <div className={styles.headerImg}>
         <div className={styles.avatarContainer}>
        <img
          src={user?.avatar}
          alt={user?.displayName}
          className={styles.avatar}
        />
      </div>
      </div>
     
      <div className={styles.text}>
        <h2>{user?.displayName} <span className={styles.rank}>{user?.rank}</span></h2>
        <p className={styles.handicap}>
          12 Handicap
        </p>
        <p className={styles.location}>Scottsdale, AZ</p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
