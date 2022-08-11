import Heading from "components/typography/Heading";
import React from "react";
import { ReactSVG } from "react-svg";
import styles from "styles/home/partners.module.scss";

const Partners = () => {
  return (
    <div className={styles.partners}>
      <Heading>Our Partners</Heading>
      <div className={styles.wrapper}>
        <ReactSVG src="/assets/svg/company-text.svg" />
        <ReactSVG src="/assets/svg/company-tagline.svg" />
        <ReactSVG src="/assets/svg/a-company.svg" />
        <ReactSVG src="/assets/svg/text-logo.svg" />
        <ReactSVG src="/assets/svg/company-tagline.svg" />
      </div>
    </div>
  );
};

export default Partners;
