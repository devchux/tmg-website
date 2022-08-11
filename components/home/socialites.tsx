import Image from "next/image";
import React from "react";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import styles from "styles/home/socialites.module.scss";

const Socialites = () => {
  const data = [
    {
      image: "/assets/images/service1.png",
      instaLink: "/",
    },
    {
      image: "/assets/images/service2.png",
      instaLink: "/",
    },
    {
      image: "/assets/images/service3.png",
      instaLink: "/",
    },
    {
      image: "/assets/images/service1.png",
      instaLink: "/",
    },
    {
      image: "/assets/images/service2.png",
      instaLink: "/",
    },
  ];
  return (
    <div className={styles.socialites}>
      {data.map(({ image, instaLink }, key) => {
        return (
          <Link href={instaLink} key={key}>
            <div className={styles.socialite}>
              <Image src={image} layout="fill" alt="" />
              <div>
                <ReactSVG src="/assets/svg/insta.svg" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socialites;
