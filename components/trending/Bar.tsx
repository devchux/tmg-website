import React, { FC } from "react";
import styles from "styles/trending/trending.module.scss";

const Bar: FC<{ title: string; color: string; grade: number }> = ({
  title,
  color,
  grade,
}) => {
  return (
    <div className={styles.trendingBar}>
      <p>{title}</p>
      <div style={{ backgroundColor: color, height: `${grade}%` }} />
    </div>
  );
};

export default Bar;
