import Heading from "components/typography/Heading";
import Image from "next/image";
import React from "react";
import styles from "styles/home/partners.module.scss";

const Partners = () => {
  return (
    <div className={styles.partners}>
      <Heading>Our Partners</Heading>
      <div className={styles.wrapper}>
        <Image
          src="/assets/images/partners/1.png"
          alt=""
          height="256"
          width="256"
          style={{ background: "white" }}
        />
        <Image
          src="/assets/images/partners/2.png"
          alt=""
          height="256"
          width="256"
        />
        <Image
          src="/assets/images/partners/3.png"
          alt=""
          height="256"
          width="256"
        />
        <Image
          src="/assets/images/partners/4.png"
          alt=""
          height="256"
          width="256"
        />
      </div>
    </div>
  );
};

export default Partners;
