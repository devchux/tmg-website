import React, { FC, ReactNode } from "react";
import styles from "styles/typography/heading.module.scss";

const Heading: FC<{ children: ReactNode }> = ({ children }) => {
  return <h3 className={styles.heading}>{children}</h3>;
};

export default Heading;
