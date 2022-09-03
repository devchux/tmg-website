import axios from "axios";
import SubmitButton from "components/buttons/submitButton";
import PageHeading from "components/typography/pageHeading";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "styles/core.module.scss";
import talentStyles from "styles/talents/talents.module.scss";

const Media = ({
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
            <PageHeading>N&apos;ihu Media</PageHeading>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
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
                <div className={talentStyles.singleImage}>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image
                    layout="fill"
                    src={item?.snippet?.thumbnails?.medium?.url}
                  />
                  <div className={talentStyles.count}>
                    <p>{item?.contentDetails?.itemCount}</p>
                    <p>Video{item?.contentDetails?.itemCount > 1 && 's'}</p>
                  </div>
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
        <div className={talentStyles.navButtons}>
          {data.prevPageToken && (
            <SubmitButton
              outlined
              onClick={() => router.push(`/media?q=${data.prevPageToken}`)}
            >
              Prev &lt;&lt;
            </SubmitButton>
          )}
          {data.nextPageToken && (
            <SubmitButton
              onClick={() => router.push(`/media?q=${data.nextPageToken}`)}
            >
              Next &gt;&gt;
            </SubmitButton>
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const YOUTUBE_API_KEY = "AIzaSyDTw9T3ywBLK7J6NovmkcbqrvP7tB2b1dk";
  const YOUTUBE_CHANNEL_ID = "UCUBxb9BTYO5I060A8A_-43w";
  const { q } = context.query;
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}&maxResults=${
        q ? "3" : "4"
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
        error: error.response.data,
      },
    };
  }
};

export default Media;
