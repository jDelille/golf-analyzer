"use client";

import React from "react";
import styles from "./PageHeader.module.scss";
import Hero from "../hero/Hero";
import { Upload } from "@/icons";
import { useRouter } from "next/navigation";

type PageHeaderProps = {
  section: string;
  page: string;
};
const PageHeader: React.FC<PageHeaderProps> = ({ section, page }) => {

  const router = useRouter();

  return (
      <div className={styles.pageHeader}>
        <div className={styles.title}>
          <p>{section}</p>
          <span>/</span>
          <p className={styles.page}>{page}</p>
        </div>
        <div className={styles.controls}>
          <Upload color="black" size={20} onClick={() => router.push("/import")}/>
        </div>
      </div>
  );
};

export default PageHeader;
