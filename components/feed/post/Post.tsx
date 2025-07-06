"use client";
import React from "react";
import styles from "./Post.module.scss";
import { PostData } from "@/types/post";

type PostProps = {
  post: PostData;
};

const Post: React.FC<PostProps> = ({ post }) => {
  let content;
  switch (post.type) {
    case "import":
      content = (
        <div className={styles.importPost}>
          <p>
            <span>{post.details.itemName}</span>
          </p>
        </div>
      );
      break;
    case "badge":
      content = (
        <div className={styles.badgePost}>
          <p className={styles.badge}>🏅</p>
          <p>
            You earned a new badge
            <span className={styles.badgeName}>{post.details.badgeName}</span>
            <span className={styles.description}>{post.details.message}</span>
          </p>
        </div>
      );
      break;
    case "record":
      content = (
        <p>
          You set a new record: <span>{post.details.recordDescription}</span>!
        </p>
      );
      break;
    default:
      content = <p>Unknown post type.</p>;
  }

  return (
    <div className={styles.post}>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Post;
