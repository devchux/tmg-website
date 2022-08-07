import React, { FC, forwardRef, ReactNode } from "react";
import styles from "styles/slider/slider.module.scss";

const SliderItem: FC<{ children: ReactNode }> = forwardRef(({ children }, ref: any) => {
  return (
    <div ref={ref} className={styles.sliderItem}>
      {children}
    </div>
  );
});

SliderItem.displayName = "SliderItem";

export default SliderItem;
