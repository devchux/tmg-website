import Slider from "components/slider";
import SliderItem from "components/slider/sliderItem";
import PageHeading from "components/typography/pageHeading";
import Image from "next/image";
import React from "react";
import styles from "styles/core.module.scss";

const EventDetail = () => {
  return (
    <div className="blog-page">
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <PageHeading className={styles.colorRed}>
              Anthony Joshua
            </PageHeading>
            <p>Boxer</p>
          </div>
        </div>
      </div>
      <section id="blog" className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 entries">
              <article className="entry entry-single">
                <div className="entry-img">
                  {[
                    "/assets/images/service1.png",
                    "/assets/images/service2.png",
                  ].length <= 1 ? (
                    <>
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
                      <Image
                        src={
                          [
                            "/assets/images/service1.png",
                            "/assets/images/service2.png",
                          ][0]
                        }
                        width="100%"
                        height="70px"
                        layout="responsive"
                        className="img-fluid"
                        alt=""
                      />
                    </>
                  ) : (
                    <Slider smallArrow noCount>
                      {[
                        "/assets/images/service1.png",
                        "/assets/images/service2.png",
                      ].map((image, i) => (
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
                  <PageHeading>About Anthony</PageHeading>
                </div>
                <div className="mt-5 entry-content">
                  <p>
                    Business organizations are financial entities owned and
                    managed either by an individual or a group of individuals or
                    even government agencies. These organizations are set up
                    with the aim of providing goods and services that is
                    intended to satisfy human wants through the effective use of
                    available economic resources. Business organizations in one
                    way or the other have a greater role to play in the growth,
                    development and productivity of the Nigerian economy. As it
                    positively improves the economy, there is also a
                    commensurable rise in the country’s gross domestic product
                    (GDP). For this reason, it is therefore important that we
                    discuss all what business organization is about; its types
                    and forms. With the knowledge of business organizations,
                    entrepreneurs are conversant with the method that perfectly
                    suites the type of business they intend venturing into.
                  </p>
                  <p>
                    Business organizations are financial entities owned and
                    managed either by an individual or a group of individuals or
                    even government agencies. These organizations are set up
                    with the aim of providing goods and services that is
                    intended to satisfy human wants through the effective use of
                    available economic resources. Business organizations in one
                    way or the other have a greater role to play in the growth,
                    development and productivity of the Nigerian economy. As it
                    positively improves the economy, there is also a
                    commensurable rise in the country’s gross domestic product
                    (GDP). For this reason, it is therefore important that we
                    discuss all what business organization is about; its types
                    and forms. With the knowledge of business organizations,
                    entrepreneurs are conversant with the method that perfectly
                    suites the type of business they intend venturing into.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
