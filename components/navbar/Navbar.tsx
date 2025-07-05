"use client";

import React from "react";
import { LeftArrow, RightArrow } from "@/icons";
import styles from "./Navbar.module.scss";

type NavbarProps = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className={isSidebarOpen ? styles.navbarShrink : styles.navbarFull}>
      <div className={styles.sidebarControl} onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <LeftArrow color="#4d4d4d" size={20} />
        ) : (
          <RightArrow color="#4d4d4d" size={20} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
