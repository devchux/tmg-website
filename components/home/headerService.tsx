import { FC, ReactNode } from "react";
import Button from "components/buttons/button";
import styles from "styles/home/headerService.module.scss";

const HeaderService: FC<{ title: string | ReactNode; source: string; onClick?: () => void;  }> = ({
  title,
  source,
  onClick,
}) => {
  return (
    <div className={styles.headerService} onClick={onClick}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${source})` }}
      />
      <div className={styles.content}>
        <h5>{title}</h5>
        {/* <Button onClick={onClick}>LEARN MORE</Button> */}
      </div>
    </div>
  );
};

export default HeaderService;
