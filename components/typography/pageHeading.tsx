import React, { FC, ReactNode } from "react";
import styles from "styles/typography/heading.module.scss";

const PageHeading: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <h3 className={`${styles.pageHeading} ${className || ""}`}>{children}</h3>
  );
};

export default PageHeading;
