import PageHeader from "@/components/page-header/PageHeader";
import React from "react";

type ImportProps = {};
const Import: React.FC<ImportProps> = () => {
  return (
    <div className="page">
      <PageHeader section="Pages" page="Import" />

      <div className="content">
        <div className="description">
          <p>Import your range session data from your Square Golf device.</p>
        </div>

        <div className="instructions">
          <p>You can import: </p>
          <ul>
            <li>Range Session Files (.csv format)</li>
          </ul>
        </div>

        <div className="import-box">
          <p>Drop files here or Browse to select.</p>
        </div>

        <div className="import-footer">
          <button>Import Data</button>
          <div className="links">
            <p>Learn more about importing files</p>
            <p>Data and Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Import;
