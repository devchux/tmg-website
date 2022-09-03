import axios from "axios";
import moment from "moment";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React, { useState } from "react";
import YouTube from "react-youtube";
import styles from "styles/media/videos.module.scss";

const Videos = ({ data, error }: any) => {
  const [video, setVideo] = useState(data?.items[0]);
  const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
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
        <div>
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
        <div></div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const YOUTUBE_API_KEY = "AIzaSyDTw9T3ywBLK7J6NovmkcbqrvP7tB2b1dk";
  const { playlist } = context.params || { playlist: null };
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlist}&key=${YOUTUBE_API_KEY}&maxResults=50`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return { props: { data } };
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
