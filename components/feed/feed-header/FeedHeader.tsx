import React from "react";
import styles from "./FeedHeader.module.scss";

type FeedHeaderProps = {
  feeds: string[];
  activeFeed: string;
};
const FeedHeader: React.FC<FeedHeaderProps> = ({ feeds, activeFeed }) => {
  return (
    <div className={styles.feedHeader}>
      {feeds.map((feed) => (
        <div
          key={feed}
          className={activeFeed === feed ? styles.feed : styles.inactiveFeed}
        >
          {feed}
        </div>
      ))}
    </div>
  );
};

export default FeedHeader;
