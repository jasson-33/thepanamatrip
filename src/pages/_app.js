import Layout from '@/components/layout';
import ColombianContextProvider from '@/context/ColombianContext';
import '@/styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'GTM-WH559H9', {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={'https://www.googletagmanager.com/gtag/js?id=GTM-WH559H9'}
      />
      <Script strategy="afterInteractive" id="google-analytics-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-WH559H9');
        `}
      </Script>
      <ColombianContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColombianContextProvider>
    </>
  );
}
