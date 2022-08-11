import React, { FC } from "react";
import Bar from "./Bar";
import styles from "styles/trending/trending.module.scss";

const Trending: FC<{
  data: { title: string; grade: number }[];
  height?: number;
}> = ({ data, height }) => {
  const colors = ["#C57F74", "#D8D8D8", "#F82607", "#D24D3A"];
  return (
    <div style={{ height: `${height || 450}px` }} className={styles.trending}>
      {data.map((item, key) => {
        return (
          <Bar key={key} {...item} color={colors[key % colors.length]} />
        );
      })}
    </div>
  );
};

export default Trending;
