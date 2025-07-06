import React from 'react';
import styles from './Feed.module.scss';
import { PostData } from '@/types/post';
import Post from './post/Post';

type FeedProps = {
    posts: PostData[];
 }
const Feed: React.FC<FeedProps> = ({posts}) => {
  return (
    <div className={styles.feed}>
        {posts.map((post) => (
            <Post post={post}/>
        ))}
    </div>
  );
};

export default Feed;