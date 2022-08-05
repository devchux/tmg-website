import Navbar from "components/nav/navbar";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import "styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
