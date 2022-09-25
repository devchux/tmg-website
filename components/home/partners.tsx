import Heading from "components/typography/Heading";
import Image from "next/image";
import React from "react";
import { ReactSVG } from "react-svg";
import styles from "styles/home/partners.module.scss";

const Partners = () => {
  return (
    <div className={styles.partners}>
      <Heading>Our Partners</Heading>
      <div className={styles.wrapper}>
        <Image
          src="/assets/images/partners/1.png"
          alt=""
          height="63"
          width="158"
          style={{ background: "white" }}
        />
        <Image
          src="/assets/images/partners/3.png"
          alt=""
          height="195"
          width="256"
        />
        <Image
          src="/assets/images/partners/2.jpg"
          alt=""
          height="156"
          width="256"
        />
        {/* <ReactSVG src="/assets/svg/text-logo.svg" />
        <ReactSVG src="/assets/svg/company-tagline.svg" /> */}
      </div>
    </div>
  );
};

export default Partners;
