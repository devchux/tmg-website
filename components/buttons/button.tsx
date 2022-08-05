import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "styles/buttons/button.module.scss";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button className={`${styles.customButton} ${className || ""}`} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
