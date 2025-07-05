import React, {  ReactElement } from "react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";

type SidebarLinkProps = {
  icon: ReactElement;
  label: string;
  href: string;
  onClick?: () => void;
  isActive: boolean;
};
const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label, href, onClick, isActive }) => {
  return (
    <Link href={href} className={isActive ? styles.linkItem : styles.linkItemInactive} onClick={onClick}>
    {/* {icon} */}
    <span className={styles.label}>{label}</span>
  </Link>
  );
};

export default SidebarLink;
