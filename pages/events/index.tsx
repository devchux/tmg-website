import Image from "components/images/image";
import PageHeading from "components/typography/pageHeading";
import { useRouter } from "next/router";
import React from "react";
import styles from "styles/core.module.scss";
import talentStyles from "styles/talents/talents.module.scss";

const Events = () => {
  const router = useRouter();
  const data = [
    {
      image: ["/assets/images/service1.png", "/assets/images/service2.png"],
      name: "Adenike Aderonke",
      position: "Actor",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo viverra
      maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit z
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo .`,
    },
    {
      image: ["/assets/images/service3.png", "/assets/images/service2.png"],
      name: "Eze Chukwudi",
      position: "Actor",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo viverra
      maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit z
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo .`,
    },
    {
      image: ["/assets/images/service2.png", "/assets/images/service2.png"],
      name: "Uncle Aderonke",
      position: "Actor",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo viverra
      maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit z
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo .`,
    },
  ];
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <PageHeading>Events</PageHeading>
            <p>
              We deliver an innovative touch to events, through our network of
              highly experienced and skilled partners. Our services include Full
              event logistics, Planning, Management and implementation.
            </p>
            <div className={styles.headerList}>
              <p>Our Event Producers provide the following:</p>
              <ul>
                <li>Concept development and Budgeting</li>
                <li>Guest list managment</li>
                <li>Security management</li>
              </ul>
            </div>
            <div className={styles.headerList}>
              <p>Our Event Managers provide:</p>
              <ul>
                <li>Execute agreed plans by managing staff</li>
                <li>Finances</li>
                <li>Vendor relationships and more</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={talentStyles.list}>
          {data.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                router.push(`/events/${i + 1}`);
              }}
            >
              <div className={talentStyles.singleImage}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image src={item.image[0]} />
              </div>
              <div className={talentStyles.singleText}>
                <h5 className={talentStyles.singleTitle}>{item.name}</h5>
                <h6 className={talentStyles.singlePosition}>{item.position}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
