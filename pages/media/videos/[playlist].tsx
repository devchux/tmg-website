import axios from "axios";
import SubmitButton from "components/buttons/submitButton";
import moment from "moment";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { NotificationManager } from "react-notifications";
import coreStyles from "styles/core.module.scss";
import styles from "styles/media/videos.module.scss";
import PageHeading from "components/typography/pageHeading";

const Videos = ({ data, error, playlist, playlistData }: any) => {
  const [video, setVideo] = useState(data?.items[0]);
  const router = useRouter();
  const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  useEffect(() => {
    if (error) {
      NotificationManager.error(error.message, "Error!", 5000);
    }
  }, [error]);
  return (
    <div>
      <div className={coreStyles.wrapper}>
        <div className={coreStyles.header}>
          <div>
            <PageHeading className={coreStyles.colorRed}>{playlistData?.title}</PageHeading>
            <p>{playlistData?.description}</p>
          </div>
        </div>
      </div>
      <div className={styles.videos}>
        <div className={styles.youtubeWrapper}>
          <YouTube
            videoId={video?.contentDetails?.videoId}
            opts={opts}
            onReady={(event) => event.target.pauseVideo()}
          />
          <div>
            <h5>{video?.snippet?.title}</h5>
            <p>{video?.snippet?.description}</p>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.videoList}>
            {data?.items?.length ? (
              data?.items?.map((item: any) => (
                <div
                  key={item.id}
                  className={`${styles.video} ${
                    item.id === video.id ? styles.selected : ""
                  }`}
                  onClick={() => setVideo(item)}
                >
                  <div className={styles.videoImage}>
                    <Image
                      src={item?.snippet?.thumbnails?.standard?.url}
                      alt=""
                      layout="fill"
                    />
                    <b>&#9658;</b>
                  </div>
                  <div className={styles.videoDetail}>
                    <h6>{item?.snippet?.title}</h6>
                    <p>
                      {moment(item?.contentDetails?.videoPublishedAt)
                        .calendar()
                        .replace(/\//g, "-")}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No videos found.</p>
            )}
          </div>
          <div className={styles.navButtons}>
            {data?.prevPageToken && (
              <SubmitButton
                outlined
                onClick={() =>
                  router.push(
                    `/media/videos/${playlist}?q=${data?.prevPageToken}`
                  )
                }
              >
                Prev &lt;&lt;
              </SubmitButton>
            )}
            {data?.nextPageToken && (
              <SubmitButton
                onClick={() =>
                  router.push(
                    `/media/videos/${playlist}?q=${data?.nextPageToken}`
                  )
                }
              >
                Next &gt;&gt;
              </SubmitButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_TOKEN;
  const { playlist } = context.params || { playlist: null };
  const { q } = context.query;
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlist}&key=${YOUTUBE_API_KEY}&maxResults=10${
        q ? `&pageToken=${q}` : ""
      }`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { data: playlistData } = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&id=${playlist}&key=${YOUTUBE_API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return {
      props: { data, playlist, playlistData: playlistData?.items[0]?.snippet },
    };
  } catch (error: any) {
    return {
      props: {
        error: {
          response: error.response.data,
          message: "Videos could not be fetched",
        },
      },
    };
  }
};

export default Videos;
