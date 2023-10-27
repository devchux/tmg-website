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
