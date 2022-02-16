import { NextUIProvider } from '@nextui-org/react';
import { MainLayout } from '../layouts/main';
import { theme } from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </NextUIProvider>
  );
}

export default MyApp;
