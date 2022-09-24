import Button from "components/buttons/button";
import Slider from "components/slider";
import SliderItem from "components/slider/sliderItem";
import Heading from "components/typography/Heading";
import Image from "next/image";
import React from "react";

import styles from "styles/home/services.module.scss";

const Services = () => {
  return (
    <div className={styles.services}>
      <Slider>
        <SliderItem>
          <div className={styles.content}>
            <div>
              <div>
                <Heading>
                  Talent <br /> managment
                </Heading>
                <p>
                  We Cultivate a global network to support outstanding
                  creatives, focusing on career development and business
                  partnerships
                </p>
                <Button>LEARN MORE</Button>
              </div>
            </div>
            <div>
              <Image
                src="/assets/images/team-management.png"
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </SliderItem>
        <SliderItem>
          <div className={styles.content}>
            <div>
              <div>
                <Heading>
                  Strategic <br /> partnerships
                </Heading>
                <p>
                  Full-Service Management, Strategic Consulting, Creative
                  Partnerships.
                </p>
                <Button>LEARN MORE</Button>
              </div>
            </div>
            <div>
              <Image
                src="/assets/images/team-management.png"
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </SliderItem>
      </Slider>
    </div>
  );
};

export default Services;
