import React, { FC, ReactNode } from "react";
import styles from "styles/buttons/submitButton.module.scss";

const SubmitButton: FC<{
  children: ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset" | undefined;
  outlined?: boolean;
  [rest: string]: any;
}> = ({ children, type = "submit", className, outlined, ...rest }) => {
  return (
    <button
      type={type}
      className={`${styles.submitButton} ${className || ""} ${
        outlined ? styles.outlined : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
