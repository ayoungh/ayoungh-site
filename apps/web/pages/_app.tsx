import Script from 'next/script';
import { MainLayout } from '../layouts/main';
import { Analytics } from '@vercel/analytics/react';

import '@styles/tailwind.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script id="google-analytics" strategy="afterInteractive">
    {`
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.googletagmanager.com/gtag/js?id=G-LJGT6P4VS0','ga');

      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-6J555H1H5G');
    `}
  </Script>   
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    <Analytics />
    </>
  );
}

export default MyApp;
