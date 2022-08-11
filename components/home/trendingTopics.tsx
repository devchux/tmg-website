import Trending from "components/trending";
import Heading from "components/typography/Heading";
import React from "react";
import styles from "styles/home/trendingTopics.module.scss"

function TrendingTopics() {
  const data = [
    {
      title: "Wizkid",
      grade: 50,
    },
    {
      title: "King of Boys",
      grade: 30,
    },
    {
      title: "Nigerian Election",
      grade: 100,
    },
    {
      title: "Fintech",
      grade: 60,
    },
  ];
  return (
    <div className={styles.trendingTopics}>
      <div className={styles.left}>
        <Heading>Trending Topics</Heading>
        <p>Tiara Lyodra</p>
        <div className={styles.content}>
          <p>
            Saturday found him for the first time strolling alone through
            zurich, breathing in the heady smell of his freedom. new adventures
            hid around each corner. <br />
            <br /> The future was again a secret. now, what was tiring had
            disappeared and only the beauty remained.
          </p>
        </div>
      </div>
      <div className={styles.chart}>
        <Trending data={data} />
      </div>
    </div>
  );
}

export default TrendingTopics;
