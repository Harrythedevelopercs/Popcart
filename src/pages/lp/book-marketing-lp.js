import {
  Footer,
  Header,
  Hero,
  Awards,
  Services,
  StandsOut,
} from "@/component/LP-Six";
import Head from "next/head";
import Script from "next/script";

const BookMarketingLp = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.svg" />
        <meta
          name="google-site-verification"
          content="xsimMs7zxe8r99xjQlDHSjHap86u9irM9JTHkI3xNpg"
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-11022581138"
      />

      <Script strategy="afterInteractive" id="google-ads-init">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11022581138');
  `}
      </Script>
      <Header />
      <Hero />
      <Awards />
      <Services />
      <StandsOut />
      <Footer />
    </>
  );
};

export default BookMarketingLp;
