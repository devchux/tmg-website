import React, { FC, ReactNode } from "react";
import styles from "styles/buttons/submitButton.module.scss";

const SubmitButton: FC<{
  children: ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset" | undefined;
}> = ({ children, type = "submit", className, ...rest }) => {
  return (
    <button
      type={type}
      className={`${styles.submitButton} ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
