import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactSVG } from "react-svg";
import styles from "styles/footer/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width="195"
          height="84"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <div>
            <div className={styles.contact}>
              <ReactSVG src="/assets/svg/email.svg" />
              <a href="mailto:info@triphectamg.com">info@triphectamg.com</a>
            </div>
            <div className={styles.contact}>
              <ReactSVG src="/assets/svg/phone.svg" />
              <Link href="/">+ 12 3456 7890</Link>
            </div>
          </div>
        </div>
        <div className={styles.sideLinks}>
          <div>
            <p className={styles.title}>Explore</p>
            <div>
              {/* <Link href="/events">Events</Link> */}
              <Link href="/management">Management</Link>
              <Link href="/media">Media and Entertainment</Link>
              {/* <Link href="/">Private Server</Link>
              <Link href="/">E-mail Hosting</Link> */}
            </div>
          </div>
          <div>
            <p className={styles.title}>Company</p>
            <div>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              {/* <Link href="/">Expert Team</Link>
              <Link href="/">Our Exciting News</Link> */}
            </div>
          </div>
          {/* <div>
            <p className={styles.title}>Address</p>
            <div className={styles.address}>
              <p>123 Lorem Ipsum Street Jakarta, Indonesia</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
