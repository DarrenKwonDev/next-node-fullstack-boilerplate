import type { AppProps } from "next/app";
import Head from "next/head";

// css 적용 순서 중요
import "../styles/reset.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HYPERLINK</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;