import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>FIT Media - HaUI</title>
        {/* <link
          rel="shortcut icon"
          href="assets/images/my-favicon/favicon1.png"
          type="image/x-icon"
        /> */}
        <link
          rel="icon"
          type="image/png"
          href="/assets/images/my-favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/images/my-favicon/favicon.svg"
        />
        <link
          rel="shortcut icon"
          href="/assets/images/my-favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/my-favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="FIT Media" />
        <link
          rel="manifest"
          href="/assets/images/my-favicon/site.webmanifest"
        />

        <link rel="stylesheet" href="assets/css/flaticon.min.css" />

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        /> */}

        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-thin-rounded/css/uicons-thin-rounded.css"
        />

        {/* Font Awesome */}
        <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
        {/* Bootstrap */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* Magnific Popup */}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        {/* Nice Select */}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        {/* Type Writer */}
        <link rel="stylesheet" href="assets/css/jquery.animatedheadline.css" />
        {/* Animate */}
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        {/* Slick */}
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        {/* Main Style */}
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
