import { AppProps } from "next/app";
import Head from "next/head";

// import base stylesheet
import "styles/base.css";

// return component
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/rdj7zur.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// export App
export default MyApp;
