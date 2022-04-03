import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          <style
            id="tempStyles"
            dangerouslySetInnerHTML={{
              __html: `
                body {
                    // TODO: Move this away from here!
                    // background-color: black !important;
                    background-image: url('/funky-lines.png') !important;
                    min-height: 100vh;
                `,
            }}
          />
          {/* <!-- Primary Meta Tags --> */}
          <title>Anthony Young</title>
          <meta name="title" content="Anthony Young" />
          <meta
            name="description"
            content="Software Engineer Based in London. "
          />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.ayoungh.co.uk/" />
          <meta property="og:title" content="Anthony Young" />
          <meta
            property="og:description"
            content="Software Engineer Based in London. "
          />
          <meta property="og:image" content="/snap.png" />
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.ayoungh.co.uk/" />
          <meta property="twitter:title" content="Anthony Young" />
          <meta
            property="twitter:description"
            content="Software Engineer Based in London. "
          />
          <meta property="twitter:image" content="/snap.png"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
