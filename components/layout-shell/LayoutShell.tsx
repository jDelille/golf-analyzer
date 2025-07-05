"use client";

import { usePathname } from "next/navigation";
import styles from "./LayoutShell.module.scss";
import { useAuth } from "@/contexts/AuthContext";
import LeftSidebar from "../sidebar/LeftSidebar";
import RightSidebar from "../sidebar/RightSidebar";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.layoutShell}>
      {!["/signup", "/login"].includes(pathname) && (
        <LeftSidebar />
      )}{" "}
      <div className={styles.mainContent}>
        <div className={styles.pageContent}>{children}</div>
      </div>
      <RightSidebar />
    </div>
  );
}
