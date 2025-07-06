import PageHeader from '@/components/page-header/PageHeader';
import Profile from '@/components/profile/Profile';
import ProfileHeader from '@/components/profile/profile-header/ProfileHeader';
import getUserProfileAndPosts from '@/hooks/getUserProfile';
import React from 'react';

type ProfileProps = {};
export default async function ProfilePage() {

  return (
    <div className="page">
      <PageHeader section='Pages' page='Profile'/>
      <div className='content'>
        <Profile />
      </div>
    </div>
  );
};
