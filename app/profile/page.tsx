import PageHeader from '@/components/page-header/PageHeader';
import ProfileHeader from '@/components/profile-header/ProfileHeader';
import React from 'react';

type ProfileProps = {
 
 }
const Profile: React.FC<ProfileProps> = () => {
  return (
    <div className="page">
      <PageHeader section='Pages' page='Profile'/>
      <div className='content'>
        <ProfileHeader />
      </div>
    </div>
  );
};

export default Profile;