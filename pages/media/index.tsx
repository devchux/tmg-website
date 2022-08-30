import axios from "axios";
import PageHeading from "components/typography/pageHeading";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "styles/core.module.scss";
import talentStyles from "styles/talents/talents.module.scss";

const Media = ({ data }: { data: { items: any[] } }) => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <PageHeading>N&apos;ihu Media</PageHeading>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={talentStyles.list}>
          {data?.items
            .filter((_, i) => i !== 0)
            .map((item: any, i: number) => (
              <div
                key={i}
                onClick={() => {
                  router.push(`media/${i + 1}`);
                }}
              >
                <div className={talentStyles.singleImage}>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image
                    layout="fill"
                    src={item?.snippet?.thumbnails?.medium?.url}
                  />
                </div>
                <div className={talentStyles.singleText}>
                  <h5 className={talentStyles.singleTitle}>
                    {item?.snippet?.title}
                  </h5>
                  <h6 className={talentStyles.singlePosition}>
                    {item?.snippet?.description}
                  </h6>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const YOUTUBE_API_KEY = "AIzaSyDTw9T3ywBLK7J6NovmkcbqrvP7tB2b1dk";
  const YOUTUBE_CHANNEL_ID = "UCUBxb9BTYO5I060A8A_-43w";
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}&maxResults=50`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return { props: { data } };
  } catch (error: any) {
    console.log("error", error.response);
  }
};

export default Media;
