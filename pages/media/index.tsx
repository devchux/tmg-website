import axios from "axios";
import Button from "components/buttons/button";
import SubmitButton from "components/buttons/submitButton";
import Select from "components/inputs/select";
import Thriller from "components/media/thriller";
import PageHeading from "components/typography/pageHeading";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import styles from "styles/core.module.scss";
import talentStyles from "styles/management/management.module.scss";

const Nihu = ({
  data,
  query,
}: {
  data: { items: any[]; nextPageToken?: string; prevPageToken?: string };
  query?: string;
}) => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <h4>Nihu Media</h4>
            <p>
              At Nihu Media, we provide an impartial perspective of life in
              Africa with documentaries, news stories and candid interviews.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <Thriller thrillers={["6r-04SJAOm0", "K96Er28SDbI"]} />
        <div className={talentStyles.list}>
          {data?.items
            .filter((_, i) => (!query ? i !== 0 : true))
            .map((item: any, i: number) => (
              <div
                key={i}
                onClick={() => {
                  router.push(`/media/videos/${item?.id}`);
                }}
              >
                <div
                  className={
                    talentStyles.singleImage + " " + talentStyles.border
                  }
                >
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image
                    layout="fill"
                    src={item?.snippet?.thumbnails?.high?.url}
                  />
                  <div className={talentStyles.count}>
                    <p>{item?.contentDetails?.itemCount}</p>
                    <p>Video{item?.contentDetails?.itemCount > 1 && "s"}</p>
                  </div>
                </div>
                <div className={talentStyles.singleText}>
                  <h5 className={talentStyles.singleTitle}>
                    {item?.snippet?.title}
                  </h5>
                  {/* <h6 className={talentStyles.singlePosition}>
                    {item?.snippet?.description}
                  </h6> */}
                </div>
              </div>
            ))}
        </div>
        {data?.prevPageToken ||
          (data?.nextPageToken && (
            <div className={talentStyles.navButtons}>
              {data?.prevPageToken && (
                <SubmitButton
                  outlined
                  onClick={() => router.push(`/media?q=${data?.prevPageToken}`)}
                >
                  Prev &lt;&lt;
                </SubmitButton>
              )}
              {data?.nextPageToken && (
                <SubmitButton
                  onClick={() => router.push(`/media?q=${data?.nextPageToken}`)}
                >
                  Next &gt;&gt;
                </SubmitButton>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

const Corporate = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <h4>Corporate Productions</h4>
            <p>
              TMG is committed to delivering compelling stories with
              eye-catching imagery. Our quality productions, in tandem with
              strong storytelling, create engaging messaging for our clients.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <Thriller thrillers={["T_HTBAEhZRs", "kIMHEN_AOcs"]} />
        {/* <div className={talentStyles.list}>
          {Array(9)
            .fill(null)
            .map((item: any, i: number) => (
              <div key={i} onClick={() => {}}>
                <div className={talentStyles.singleImage}>
                  <Image
                    layout="fill"
                    src="/assets/images/talent-management.png"
                  />
                  <div className={talentStyles.count}>
                    <p>40</p>
                    <p>Videos</p>
                  </div>
                </div>
                <div className={talentStyles.singleText}>
                  <h5 className={talentStyles.singleTitle}>Test</h5>
                  <h6 className={talentStyles.singlePosition}>
                    Just Testing 123
                  </h6>
                </div>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
};

const Production = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <h4>Production Services</h4>
            <p>
              Our talent pool of skilled creatives are available to develop and
              produce content, experiences and events for a wide array of
              clientele. We cover everything from pre-production to
              post-production, live streaming, on location or in studio, and
              pre-recordings for all screen formats; TVC, web and mobile.
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.wrapper}>
        <div className={talentStyles.list}>
          {Array(9)
            .fill(null)
            .map((item: any, i: number) => (
              <div key={i} onClick={() => {}}>
                <div className={talentStyles.singleImage}>
                  <Image
                    layout="fill"
                    src="/assets/images/talent-management.png"
                    alt=""
                  />
                  <div className={talentStyles.count}>
                    <p>40</p>
                    <p>Videos</p>
                  </div>
                </div>
                <div className={talentStyles.singleText}>
                  <h5 className={talentStyles.singleTitle}>Test</h5>
                  <h6 className={talentStyles.singlePosition}>
                    Just Testing 123
                  </h6>
                </div>
              </div>
            ))}
        </div>
      </div> */}
    </div>
  );
};

const Media = ({
  data,
  query,
  error,
}: {
  data: { items: any[]; nextPageToken?: string; prevPageToken?: string };
  query?: string;
  error?: any;
}) => {
  const [state, setState] = useState<
    string | "nihu" | "corporate" | "production"
  >("nihu");
  useEffect(() => {
    if (error) {
      NotificationManager.error(error.message, "Error!", 5000);
    }
  }, [error]);
  const service: any = {
    nihu: Nihu,
    corporate: Corporate,
    production: Production,
  };

  const Component = service[state];
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <PageHeading className={styles.colorRed}>
              Media and Entertainment
            </PageHeading>
            <p>
              At TMG, we produce diverse and original African programming where
              information and entertainment merge to provide an engaging and
              refreshing experience. We also provide captivating content for
              corporate and social enterprises.
            </p>
            <div className={styles.tabs}>
              <Button
                isActive={state === "nihu"}
                onClick={() => setState("nihu")}
                variant="secondary"
              >
                N&apos;ihu Media
              </Button>
              <Button
                isActive={state === "corporate"}
                onClick={() => setState("corporate")}
                variant="secondary"
              >
                corporate solutions
              </Button>
              <Button
                isActive={state === "production"}
                onClick={() => setState("production")}
                variant="secondary"
              >
                Production Services
              </Button>
              <Select
                value={state}
                onChange={({ target: { value } }) => setState(value)}
                options={[
                  { label: <>N&apos;ihu Media</>, value: "nihu" },
                  { label: <>Corporate Solutions</>, value: "corporate" },
                  { label: <>Production Services</>, value: "production" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <Component data={data} query={query} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_TOKEN;
  const YOUTUBE_CHANNEL_ID = "UCUBxb9BTYO5I060A8A_-43w";
  const { q } = context.query;
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}&maxResults=${
        q ? "9" : "10"
      }${q ? `&pageToken=${q}` : ""}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return { props: { data, query: q || null } };
  } catch (error: any) {
    return {
      props: {
        error: {
          response: error.response.data,
          message: "Playlists could not be fetched",
        },
      },
    };
  }
};

export default Media;
