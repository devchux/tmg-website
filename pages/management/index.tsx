import SubmitButton from "components/buttons/submitButton";
import Image from "components/images/image";
import Modal from "components/modal";
import Slider from "components/slider";
import SliderItem from "components/slider/sliderItem";
import PageHeading from "components/typography/pageHeading";
import { ManagementPersonas } from "utils/lib";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "styles/core.module.scss";
import talentStyles from "styles/management/management.module.scss";

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

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <PageHeading className={styles.colorRed}>
              MANAGEMENT SERVICES
            </PageHeading>
            <p>
              Our goal at TMG is to ensure maximum impact for our clients by
              identifying the ideal brands for mutually beneficial impact. Our
              interpersonal approach helps us develop strategic plans to create
              sustainable growth for our clients.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={talentStyles.list}>
          {ManagementPersonas.map((item, i) => (
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
                  router.push(
                    `/management/${content.name
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`
                  );
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
