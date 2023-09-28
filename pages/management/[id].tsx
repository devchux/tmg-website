import Slider from "components/slider";
import SliderItem from "components/slider/sliderItem";
import PageHeading from "components/typography/pageHeading";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import React from "react";
import ErrorCode from "next/error";
import styles from "styles/core.module.scss";
import { IManagementPersona } from "type";
import { ManagementPersonas } from "utils/lib";

const EventDetail = ({
  data,
  error,
}: {
  data: IManagementPersona;
  error: { message: string };
}) => {
  if (error && error.message)
    return <ErrorCode statusCode={400} title={error.message} />;

  return (
    <div className="blog-page">
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <PageHeading className={styles.colorRed}>{data.name}</PageHeading>
            <p>{data.position}</p>
          </div>
        </div>
      </div>
      <section id="blog" className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 entries">
              <article className="entry entry-single">
                <div className="entry-img">
                  {data.image.length <= 1 ? (
                    <>
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
                      <Image
                        src={data.image[0]}
                        width="100%"
                        height="70px"
                        layout="responsive"
                        className="img-fluid"
                        alt=""
                      />
                    </>
                  ) : (
                    <Slider smallArrow noCount>
                      {data.image.map((image, i) => (
                        <SliderItem key={i}>
                          {/* eslint-disable-next-line jsx-a11y/alt-text */}
                          <Image
                            src={image}
                            width="100%"
                            height="70px"
                            layout="responsive"
                            className="img-fluid"
                            alt=""
                          />
                        </SliderItem>
                      ))}
                    </Slider>
                  )}
                  {/* <Image
                    src="/assets/images/service3.png"
                    width="100%"
                    height="70px"
                    layout="responsive"
                    className="img-fluid"
                    alt=""
                  /> */}
                </div>
                <div className="entry-title">
                  <PageHeading>{data.name}</PageHeading>
                </div>
                <div className="mt-5 entry-content">
                  <p>{data.description}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const id = context.query?.id as string;
  const data = ManagementPersonas.find(
    (p) => p.name.split(" ").join("-").toLowerCase() === id
  );

  if (!data) {
    return { props: { error: { message: "Data not found" } } };
  }

  return {
    props: { data },
  };
};

export default EventDetail;
