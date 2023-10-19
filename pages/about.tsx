import Heading from "components/typography/Heading";
import Image from "next/image";
import React from "react";
import styles from "styles/about/about.module.scss";

const About = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <Heading>About tmg</Heading>
            <p>
              TMG is a creative focused company. From management to production,
              we forge strategic partnerships to deliver optimal value to
              clients and audiences alike.
            </p>
            {/* <div>
              <button onClick={() => setPlay(!play)}>
                <ReactSVG
                  src={play ? "/assets/svg/pause.svg" : "/assets/svg/play.svg"}
                />
              </button>
              <h6>watch video</h6>
            </div> */}
          </div>
          <div className={styles.video}>
            <Image src="/assets/images/brand.png" alt="" layout="fill" />
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mission}>
          <Heading>Our mission</Heading>
          <p>Tell compelling stories. Build relationships. Grow brands.</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mission}>
          <Heading>Entertainment and Media</Heading>
          <p>
            At TMG, we produce diverse and original African programming where
            information and entertainment merge to provide an engaging and
            refreshing experience. We also provide captivating content for
            corporate and social enterprises.
          </p>
          {/* <div className={styles.cultureImages}>
            <div></div>
            <div></div>
          </div> */}
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mission}>
          <Heading>Production Services</Heading>
          <p>
            Our talent pool of skilled creatives are available to develop and
            produce content, experiences and events for a wide array of
            clientele. We cover everything from pre-production to
            post-production, live streaming, on location or in studio, and
            pre-recordings for all screen formats; TVC, web and mobile.
          </p>
          {/* <div className={styles.cultureImages}>
            <div></div>
            <div></div>
          </div> */}
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mission}>
          <Heading>Management Services</Heading>
          <p>
            Our goal at TMG is to ensure maximum impact for our clients by
            identifying the ideal brands for mutually beneficial impact. Our
            interpersonal approach helps us develop strategic plans to create
            sustainable growth for our clients.
          </p>
          {/* <div className={styles.cultureImages}>
            <div></div>
            <div></div>
          </div> */}
        </div>
      </div>
      {/* <div className={styles.wrapper}>
        <div className={styles.boardTeam}>
          <div className={styles.board}>
            <Heading>The Board</Heading>
            <div>
              <div className={styles.boardImage}></div>
              <div className={styles.boardText}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit z
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  zeiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit z
                </p>
              </div>
            </div>
          </div>
          <div className={styles.team}>
            <Heading>The Team</Heading>
            <div className={styles.teams}>
              <div className={styles.teamMember}>
                <div></div>
                <p>
                  Lor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit z
                </p>
              </div>
              <div className={styles.teamMember}>
                <div></div>
                <p>
                  Lor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit z
                </p>
              </div>
              <div className={styles.teamMember}>
                <div></div>
                <p>
                  Lor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit z
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
