import React from "react";
import styles from "./dropdown.module.scss";
import Link from "next/link";

type ProfileDropdownProps = {};

const ProfileDropdown: React.FC<ProfileDropdownProps> = () => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.profileHeader}>
        <p>Justin Delille</p>
      </div>

      <div className={styles.profileLinks}>
        <ul>
          <div className={styles.section}>
            <li>View Profile</li>
          </div>
          <div className={styles.section}>
            <li>Account Settings</li>
          </div>
          <div className={styles.section}>
            <li>Help</li>
            <li>Status</li>
            <li>Sign Out</li>
          </div>
        </ul>
      </div>

      <div className={styles.siteLinks}>
        <Link href={"/settings/terms-of-use"}>Terms of Use</Link>
        <span>•</span>
        <Link href={"/settings/privacy"}>Privacy</Link>
        <span>•</span>
        <Link href={"/settings/security"}>Security</Link>
      </div>
    </div>
  );
};

export default ProfileDropdown;
