import { PostData } from "./post";

export type UserProfile = {
  bio: string;
  createdAt: string;
  displayName: string;
  email: string;
  role: string;
  uid: string;
  avatar: string;
  rank: string;
}

export type UserProfileWithPosts = {
  profile: UserProfile | null;
  posts: PostData[];
};