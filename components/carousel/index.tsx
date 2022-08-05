import React, {
  Children,
  cloneElement,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ReactSVG } from "react-svg";
import styles from "styles/carousel/carousel.module.scss";

const Carousel: FC<{ children: ReactElement[] }> = ({ children }) => {
  const [index, setIndex] = useState<number>(0);
  const childrenLength: number = useMemo(
    () => Children.count(children),
    [children]
  );
  const slide = useCallback(
    (i: number) => {
      if (i < 0) {
        i = childrenLength - 1;
      } else if (i >= childrenLength) {
        i = 0;
      }
      setIndex(i);
    },
    [childrenLength]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      slide(index + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [index, slide]);

  return (
    <div className={styles.carousel}>
      <button
        id="left-arrow"
        onClick={() => slide(index - 1)}
        className={styles.arrow}
      >
        <ReactSVG src="/assets/svg/right-arrow.svg" />
      </button>
      <div
        className={styles.carouselItemWrapper}
        style={{
          width: `${childrenLength * 100}%`,
          left: `-${index * 100}%`,
        }}
      >
        {Children.map(children, (child: ReactElement, n: number) => {
          return cloneElement(child, { isActive: n === index });
        })}
      </div>
      <button
        id="right-arrow"
        onClick={() => slide(index + 1)}
        className={styles.arrow}
      >
        <ReactSVG src="/assets/svg/right-arrow.svg" />
      </button>
    </div>
  );
};

export default Carousel;
