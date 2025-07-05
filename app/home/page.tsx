import PageHeader from "@/components/page-header/PageHeader";
import React from "react";

type HomeProps = {};
const Home: React.FC<HomeProps> = () => {
  return (
    <div className="page">
      <PageHeader section="Pages" page="Home" />
      <div className="content">
        
      </div>
    </div>
  );
};

export default Home;
