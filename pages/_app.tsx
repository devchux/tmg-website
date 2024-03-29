import Footer from "components/footer";
import Navbar from "components/nav/navbar";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import "styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Triphecta Management Group</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <NotificationContainer />
    </Fragment>
  );
}

export default MyApp;
