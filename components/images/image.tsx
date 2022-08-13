import React, { FC } from "react";
import styles from "styles/images/image.module.scss";

const Image: FC<{ src?: string }> = ({ src }) => {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={styles.image}
    ></div>
  );
};

export default Image;
