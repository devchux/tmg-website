import type { NextPage } from "next";
import Header from "components/home/header";
import Services from "components/home/services";
import NihuMedia from "components/home/nihuMedia";
// import TrendingTopics from "components/home/trendingTopics";
import Socialites from "components/home/socialites";
import Partners from "components/home/partners";
// import Contact from "components/home/contact";
import axios from "axios";
import { useEffect } from "react";
import { NotificationManager } from "react-notifications";

const Home: NextPage = ({ playlistData, error, instaMedia }: any) => {
  useEffect(() => {
    if (error) {
      NotificationManager.error(error.message, "Error!", 5000);
    }
  }, [error]);
  return (
    <div>
      <Header />
      <Services />
      <NihuMedia playlist={playlistData?.items} />
      {/* <TrendingTopics /> */}
      <Socialites data={instaMedia?.data} />
      <Partners />
      {/* <Contact /> */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_TOKEN;
  const YOUTUBE_CHANNEL_ID = "UCUBxb9BTYO5I060A8A_-43w";
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}&maxResults=9`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { data: instaMedia } = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${process.env.FB_TOKEN}`
    );

    return { props: { playlistData: data, instaMedia } };
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

export default Home;
