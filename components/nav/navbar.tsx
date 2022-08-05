import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "styles/nav/navbar.module.scss";

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (ref.current && window.pageYOffset > ref.current?.offsetHeight) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`${styles.navbar} ${fixed ? styles.navbarFixed : ""}`}
    >
      <Image src="/assets/images/logo.png" alt="logo" width="195" height="84" />
      <button className={styles.menuButton}>
        <i />
        <i />
        <i />
      </button>
    </div>
  );
};

export default Navbar;
