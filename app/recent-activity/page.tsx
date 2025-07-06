import PageHeader from "@/components/page-header/PageHeader";
import RecentActivity from "@/components/recent-activity/RecentActivity";
import React from "react";

type RecentActivityPageProps = {};
const RecentActivityPage: React.FC<RecentActivityPageProps> = () => {
  return (
    <div className="page">
      <PageHeader section="Pages" page="Recent Activity" />
      <div className="content">
        <RecentActivity />
      </div>
    </div>
  );
};

export default RecentActivityPage;
