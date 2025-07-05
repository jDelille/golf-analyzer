"use client";

import React from "react";
import styles from "./PageHeader.module.scss";
import Hero from "../hero/Hero";

type PageHeaderProps = {
  section: string;
  page: string;
};
const PageHeader: React.FC<PageHeaderProps> = ({ section, page }) => {
  return (
      <div className={styles.pageHeader}>
        <div className={styles.title}>
          <p>{section}</p>
          <span>/</span>
          <p className={styles.page}>{page}</p>
        </div>
      </div>
  );
};

export default PageHeader;
