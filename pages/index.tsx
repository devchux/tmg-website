import type { NextPage } from "next";
import Header from "components/home/header";
import Services from "components/home/services";
import NihuMedia from "components/home/nihuMedia";
import TrendingTopics from "components/home/trendingTopics";
import Socialites from "components/home/socialites";
import Partners from "components/home/partners";
import Contact from "components/home/contact";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Services />
      <NihuMedia />
      <TrendingTopics />
      <Socialites />
      <Partners />
      <Contact />
    </div>
  );
};

export default Home;
