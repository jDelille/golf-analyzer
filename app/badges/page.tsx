import PageHeader from "@/components/page-header/PageHeader";
import React from "react";

type BadgesProps = {};
const Badges: React.FC<BadgesProps> = () => {
  return (
    <div className="page">
      <PageHeader section="Pages" page="Badges" />
    </div>
  );
};

export default Badges;
