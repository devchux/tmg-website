import type { NextPage } from "next";
import Header from "components/home/header";
import Services from "components/home/services";
import NihuMedia from "components/home/nihuMedia";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Services />
      <NihuMedia />
    </div>
  );
};

export default Home;
