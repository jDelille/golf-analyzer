import GolfBagOverview from "@/components/golf-bag-overview/GolfBagOverview";
import Hero from "@/components/hero/Hero";
import OverviewBoxes from "@/components/overview-boxes/OverviewBoxes";
import PageHeader from "@/components/page-header/PageHeader";
import RecentActivity from "@/components/recent-activity/RecentActivity";
import React from "react";

type OverviewProps = {};
const Overview: React.FC<OverviewProps> = () => {
  return (
    <div className="page">
      <PageHeader section="Dashboards" page="Overview" />
      <div className="content">
       
      </div>
    </div>
  );
};

export default Overview;

//  <Hero title="Overview" />
//         <OverviewBoxes />
//         <div className="row">
//           <RecentActivity />
//           <GolfBagOverview />
//         </div>
