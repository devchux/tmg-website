import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "styles/buttons/button.module.scss";

const Button: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    isActive?: boolean;
  }
> = ({
  variant = "primary",
  isActive = false,
  className,
  children,
  ...rest
}) => {
  if (variant === "secondary")
    return (
      <button
        className={`${styles.secondaryCustomButton} ${
          isActive ? styles.secondaryCustomButtonActive : ""
        } ${className || ""}`}
        {...rest}
      >
        <span>{children}</span>
      </button>
    );
  return (
    <button className={`${styles.customButton} ${className || ""}`} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
