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
                    height: 100vh;
                `,
            }}
          />{' '}
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
