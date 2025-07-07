"use client";

import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import getUserProfileAndPosts from "@/hooks/getUserProfile";
import ProfileHeader from "./profile-header/ProfileHeader";
import { ClubMaxCarry, UserProfileWithPosts } from "@/types/userProfile";
import Feed from "../feed/Feed";
import { getMaxCarryPerClub } from "@/hooks/range-session/maxCarryPerClub";
import FeedHeader from "../feed/feed-header/FeedHeader";

const feeds = [
  "All",
  "Badges",
  "Activity"
]

const Profile: React.FC = () => {
  const [data, setData] = useState<UserProfileWithPosts | null>(null);
  const [maxCarryByClub, setMaxCarryByClub] = useState<
    Record<string, ClubMaxCarry>
  >({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [profileAndPosts, maxCarry] = await Promise.all([
          getUserProfileAndPosts(),
          getMaxCarryPerClub(),
        ]);
        setData(profileAndPosts);
        setMaxCarryByClub(maxCarry);
      } catch (error) {
        console.error(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (!data?.profile) return <p>No profile found.</p>;

  console.log(maxCarryByClub);

  return (
    <div className={styles.profile}>
      <ProfileHeader user={data.profile} />
      <FeedHeader feeds={feeds} activeFeed="All" />
      <Feed posts={data.posts} />
    </div>
  );
};

export default Profile;
