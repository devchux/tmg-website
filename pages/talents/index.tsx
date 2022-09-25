import SubmitButton from "components/buttons/submitButton";
import Image from "components/images/image";
import Modal from "components/modal";
import Slider from "components/slider";
import SliderItem from "components/slider/sliderItem";
import PageHeading from "components/typography/pageHeading";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "styles/core.module.scss";
import talentStyles from "styles/talents/talents.module.scss";

const Talents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<{
    id: number;
    image: string[];
    name: string;
    position: string;
    description: string;
  }>({
    id: 0,
    image: [],
    name: "",
    position: "",
    description: "",
  });
  const router = useRouter();
  const data = [
    {
      image: [
        "/assets/images/artist/1.jpg",
        "/assets/images/artist/2.jpeg",
        "/assets/images/artist/3.jpeg",
        "/assets/images/artist/4.jpeg",
        "/assets/images/artist/5.jpg",
      ],
      name: "Adenike Aderonke",
      position: "Actor",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo viverra
      maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit z
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo .`,
    },
    {
      image: [
        "/assets/images/sffl/1.png",
        "/assets/images/sffl/2.jpg",
        "/assets/images/sffl/3.jpg",
      ],
      name: "Eze Chukwudi",
      position: "Actor",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo viverra
      maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit z
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo .`,
    },
    {
      image: ["/assets/images/service2.png", "/assets/images/service2.png"],
      name: "Uncle Aderonke",
      position: "Actor",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo viverra
      maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit z
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo .`,
    },
  ];
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <PageHeading className={styles.colorRed}>
              Talent MANAGEMENT
            </PageHeading>
            <p>
              Management services for the creative industries; art, media and
              lifestyle. We design and implement exclusive strategies for
              talents, geared toward image building and secure creative
              partnerships between talents and brands.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={talentStyles.list}>
          {data.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                setContent({ ...item, id: i });
                setIsOpen(true);
              }}
            >
              <div className={talentStyles.singleImage}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image src={item.image[0]} />
              </div>
              <div className={talentStyles.singleText}>
                <h5 className={talentStyles.singleTitle}>{item.name}</h5>
                <h6 className={talentStyles.singlePosition}>{item.position}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <div className={talentStyles.modalContent}>
          <div className={talentStyles.modalImage}>
            {content.image.length <= 1 ? (
              <>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image src={content.image[0]} />
              </>
            ) : (
              <Slider smallArrow autoFlow={false} noCount>
                {content.image.map((image, i) => (
                  <SliderItem key={i}>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image src={image} />
                  </SliderItem>
                ))}
              </Slider>
            )}
          </div>
          <div className={talentStyles.text}>
            <PageHeading className={talentStyles.modalTitle}>
              {content.name}
            </PageHeading>
            <h6>{content.position}</h6>
            <p>{content.description}</p>
            <div className={talentStyles.buttonWrapper}>
              <SubmitButton
                onClick={() => {
                  router.push(`/talents/${content.id + 1}`);
                }}
              >
                More Details
              </SubmitButton>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Talents;
