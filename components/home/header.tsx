import React from "react";
import HeaderService from "./headerService";
import styles from "styles/home/header.module.scss";
import Carousel from "components/carousel";
import CarouselItem from "components/carousel/carouselItem";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter()
  return (
    <header>
      <div className={styles.headerServices}>
        <HeaderService
          title={
            <>
              Managment <br /> services
            </>
          }
          source="/assets/images/service1.png"
          onClick={() => router.push('/talents')}
        />
        <HeaderService
          title={
            <>
              Entertainment <br /> and media
            </>
          }
          source="/assets/images/service2.png"
        />
        <HeaderService title="Events" source="/assets/images/service3.png" />
      </div>
      <div className={styles.headerCarousel}>
        <Carousel>
          <CarouselItem>
            <div className={styles.headerCarouselContent}>
              <h3>Strategic Consulting 1</h3>
              <p>
                Our talent pool of pros and skilled creatives originate,
                develop, and produce concepts, themes, content, branded
                products, experiences and events.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className={styles.headerCarouselContent}>
              <h3>Strategic Consulting 2</h3>
              <p>
                Our talent pool of pros and skilled creatives originate,
                develop, and produce concepts, themes, content, branded
                products, experiences and events.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className={styles.headerCarouselContent}>
              <h3>Strategic Consulting 3</h3>
              <p>
                Our talent pool of pros and skilled creatives originate,
                develop, and produce concepts, themes, content, branded
                products, experiences and events.
              </p>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </header>
  );
};

export default Header;
