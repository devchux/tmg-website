import Image from "next/image";
import React from "react";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import styles from "styles/home/socialites.module.scss";

const Socialites = ({
  data,
}: {
  data: { id: string; caption: string; media_url: string; permalink: string }[];
}) => {
  return (
    <div className={styles.socialites}>
      {data?.slice(0, 10).map(({ id, media_url, caption, permalink }) => {
        return (
          <Link target="_blank" href={permalink} key={id}>
            <div className={styles.socialite}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={media_url} alt={caption} />
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
