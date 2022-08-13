import React, { FC, ReactNode, useEffect } from "react";
import { ReactSVG } from "react-svg";
import styles from "styles/modal/modal.module.scss";

const Modal: FC<{
  children: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}> = ({ children, isOpen, toggle }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <div className={`${styles.modal} ${isOpen ? styles.isOpen : ""}`}>
      <div className={styles.modalContent}>
        <div className={styles.close}>
          <ReactSVG
            onClick={() => {
              toggle();
            }}
            src="/assets/svg/close.svg"
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
