import React from "react";
import HeaderService from "./headerService";
import styles from "styles/home/header.module.scss";
import Carousel from "components/carousel";
import CarouselItem from "components/carousel/carouselItem";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <div className={styles.headerServices}>
        <HeaderService
          title={
            <>
              Managment <br /> services
            </>
          }
          source="/assets/images/talent-management.png"
          onClick={() => router.push("/talents")}
        />
        <HeaderService
          title={
            <>
              Entertainment <br /> and media
            </>
          }
          source="/assets/images/entertainment.png"
          onClick={() => router.push("/media")}
        />
        <HeaderService
          title="Events"
          source="/assets/images/events.png"
          onClick={() => router.push("/events")}
        />
      </div>
      <div className={styles.headerCarousel}>
        <Carousel>
          <CarouselItem>
            <div className={styles.headerCarouselContent}>
              <h3>Strategic Consulting</h3>
              <p>Tailored strategic plans with effective implementation</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className={styles.headerCarouselContent}>
              <h3>Creative Content</h3>
              <p>Stunning visuals that accentuate profound storytelling</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className={styles.headerCarouselContent}>
              <h3>Creative Partnerships</h3>
              <p>
                Identify talents and brands for mutually beneficial campaigns
              </p>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </header>
  );
};

export default Header;
