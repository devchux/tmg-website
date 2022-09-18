import React, { ChangeEventHandler, FC, ReactNode } from "react";

import styles from "styles/inputs/select.module.scss";

const Select: FC<{
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: { label: string | ReactNode; value: string }[];
  className?: string;
}> = ({ value, onChange, options, className }) => {
  return (
    <select
      className={`${styles.select} ${className || ""}`}
      value={value}
      onChange={onChange}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
