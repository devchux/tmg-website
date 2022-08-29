import Slider from "components/slider";
import SliderItem from "components/slider/sliderItem";
import Heading from "components/typography/Heading";
import Link from "next/link";
import React from "react";
import styles from "styles/home/nihuMedia.module.scss";

const NihuMedia = ({ playlist }: { playlist: any[] }) => {
  return (
    <div className={styles.nihuMedia}>
      <div className={styles.top}>
        <Heading>N&apos;ihu Media</Heading>
        <Link href="/">Learn More &gt;</Link>
      </div>
      <div className={styles.sliderWrapper}>
        <Slider gap noCount>
          {playlist
            ?.filter((_, i) => i !== 0)
            .map((data, i) => {
              return (
                <SliderItem key={i}>
                  <div
                    style={{
                      backgroundImage: `url(${data?.snippet?.thumbnails?.medium?.url})`,
                    }}
                    className={styles.singleMedia}
                  ></div>
                  <div className={styles.mediaDescription}>
                    <h6>{data?.snippet?.title}</h6>
                    <p>
                      {data?.snippet?.description.slice(0, 100)}
                      {data?.snippet?.description.length > 100 && "..."}
                    </p>
                  </div>
                </SliderItem>
              );
            })}
        </Slider>
      </div>
      <div className={styles.mobileLink}>
        <Link href="/">Learn More &gt;</Link>
      </div>
    </div>
  );
};

export default NihuMedia;
