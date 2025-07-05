import PageHeader from '@/components/page-header/PageHeader';
import React from 'react';

type CalendarProps = {
 
 }
const Calendar: React.FC<CalendarProps> = () => {
  return (
    <div className="page">
            <PageHeader section="Pages" page="Calendar" />

    </div>
  );
};

export default Calendar;