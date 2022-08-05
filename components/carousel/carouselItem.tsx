import React, { FC, ReactNode } from "react";
import styles from "styles/carousel/carousel.module.scss";

const CarouselItem: FC<{ children: ReactNode; isActive?: boolean }> = ({
  children,
  isActive,
}) => {
  return (
    <div className={`${styles.carouselItem} ${isActive ? styles.active : ""}`}>
      {children}
    </div>
  );
};

export default CarouselItem;
