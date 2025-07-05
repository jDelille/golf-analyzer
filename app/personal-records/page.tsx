import PageHeader from '@/components/page-header/PageHeader';
import React from 'react';

type RecordsProps = {
 
 }
const Records: React.FC<RecordsProps> = () => {
  return (
    <div className="page">
            <PageHeader section="Pages" page="Personal Records" />

    </div>
  );
};

export default Records;