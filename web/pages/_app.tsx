import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import theme from "../Theme/theme";

// css 적용 순서 중요
import "../styles/reset.css";
import Layout from "../components/Layout";
import GlobalStyle from "../Theme/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HYPERLINK</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
