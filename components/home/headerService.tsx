import { FC, ReactNode } from "react";
import Button from "components/buttons/button";
import styles from "styles/home/headerService.module.scss";

const HeaderService: FC<{ title: string | ReactNode; source: string }> = ({
  title,
  source,
}) => {
  return (
    <div className={styles.headerService}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${source})` }}
      />
      <div className={styles.content}>
        <h5>{title}</h5>
        <Button>LEARN MORE</Button>
      </div>
    </div>
  );
};

export default HeaderService;
