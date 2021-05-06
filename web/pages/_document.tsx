import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface IProps {
  styleTags: Array<React.ReactElement<Record<string, unknown>>>;
}

export default class MyDocument extends Document<IProps> {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet(); // Create an instance of ServerStyleSheet
    const originalRenderPage = context.renderPage;
    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* Output the styles in the head  */}
          {this.props.styleTags}

          {/* meta tags */}
          <meta name="format-detection" content="telephone=no" />
          <meta name="theme-color" content="#000000" />
          <meta name="author" content="anatomy1545@gmail.com" />

          {/* googld font */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;400;800&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
