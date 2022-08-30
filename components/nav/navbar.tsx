import Heading from "components/typography/Heading";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import styles from "styles/nav/navbar.module.scss";

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [fixed, setFixed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

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
    <Fragment>
      <div
        ref={ref}
        className={`${styles.navbar} ${fixed ? styles.navbarFixed : ""}`}
      >
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width="195"
            height="84"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <i />
          <i />
          <i />
        </button>
      </div>
      <div className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
        <div className={styles.menuClose}>
          <ReactSVG onClick={toggleMenu} src="/assets/svg/close.svg" />
        </div>
        <div className={styles.menuLinks}>
          <Link href="/">
            <a style={{ transitionDelay: `${0.2}s` }} onClick={toggleMenu}>
              Home
            </a>
          </Link>

          <Link href="/about">
            <a style={{ transitionDelay: `${0.2 * 2}s` }} onClick={toggleMenu}>
              About us{" "}
            </a>
          </Link>

          <Link href="/events">
            <a style={{ transitionDelay: `${0.2 * 3}s` }} onClick={toggleMenu}>
              Events
            </a>
          </Link>

          <Link href="/media">
            <a style={{ transitionDelay: `${0.2 * 4}s` }} onClick={toggleMenu}>
              Entertainment and media
            </a>
          </Link>

          <Link href="/talents">
            <a style={{ transitionDelay: `${0.2 * 5}s` }} onClick={toggleMenu}>
              Talent Managment
            </a>
          </Link>

          <Link href="/">
            <a style={{ transitionDelay: `${0.2 * 6}s` }} onClick={toggleMenu}>
              blog
            </a>
          </Link>

          <Link href="/">
            <a style={{ transitionDelay: `${0.2 * 7}s` }} onClick={toggleMenu}>
              Contact us
            </a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
