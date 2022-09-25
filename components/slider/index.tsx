import React, {
  Children,
  cloneElement,
  FC,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { ReactSVG } from "react-svg";
import styles from "styles/slider/slider.module.scss";

const Slider: FC<{
  children: ReactElement[];
  gap?: boolean;
  noCount?: boolean;
  smallArrow?: boolean;
  autoFlow?: boolean;
}> = ({
  children,
  gap,
  noCount = false,
  smallArrow = false,
  autoFlow = true,
}) => {
  const [index, setIndex] = useState<number>(0);

  const childrenLength: number = useMemo(
    () => Children.count(children),
    [children]
  );

  const refs = Array(childrenLength).fill(useRef(null));

  const childWidth = useMemo(
    () => refs[index].current?.getBoundingClientRect().width || 0,
    [refs, index]
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

  return (
    <div className={styles.slider}>
      {index > 0 && (
        <button
          id="right-arrow"
          onClick={() => slide(index - 1)}
          className={`${styles.arrow} ${smallArrow ? styles.smallArrow : ""} ${
            styles.leftArrow
          }`}
        >
          <ReactSVG src="/assets/svg/greater-than.svg" />
        </button>
      )}
      <div
        className={`${styles.sliderItemWrapper} ${gap ? styles.gap : ""}`}
        style={{
          width: gap ? "fit-content" : `${childrenLength * 100}%`,
          left: gap ? `-${index * (childWidth + 34.47)}px` : `-${index * 100}%`,
        }}
      >
        {Children.map(children, (child: ReactElement, n: number) => {
          return cloneElement(child, { isActive: n === index, ref: refs[n] });
        })}
      </div>
      {!autoFlow ? (
        index !== childrenLength - 1 ? (
          <button
            id="right-arrow"
            onClick={() => slide(index + 1)}
            className={`${styles.arrow} ${
              smallArrow ? styles.smallArrow : ""
            } ${styles.rightArrow}`}
          >
            <ReactSVG src="/assets/svg/greater-than.svg" />
          </button>
        ) : null
      ) : (
        <button
          id="right-arrow"
          onClick={() => slide(index + 1)}
          className={`${styles.arrow} ${smallArrow ? styles.smallArrow : ""} ${
            styles.rightArrow
          }`}
        >
          <ReactSVG src="/assets/svg/greater-than.svg" />
        </button>
      )}
      {!noCount && (
        <div className={styles.count}>
          <p>
            {index + 1}/{childrenLength}
          </p>
        </div>
      )}
    </div>
  );
};

export default Slider;
