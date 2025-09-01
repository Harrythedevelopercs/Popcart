import {
  BookPromotionFooter,
  BookPromotionHeader,
  BrandLogos,
  ClientLogos,
  ContactForm,
  FrequentlyAskedQuestions,
  Hero,
  Popup,
  Portfolio,
  Pricing,
  Process,
  PromoteBook,
  Qualify,
  Reviews,
  WhyChoose,
} from "@/component/LP-Eight";
import Head from "next/head";
import Script from "next/script";

const BookPromotionMarketing = () => {
  return (
    <>
      <Head>
        <title>Book Promotion Marketing - Broadway Publishers</title>
        <meta
          property="og:title"
          content="Join over 500 successful authors and achieve bestseller status with premium-grade book promotion services at Broadway Publishers!"
          key="promotion"
        />
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
      <BookPromotionHeader />
      <Hero />
      <ClientLogos />
      <Qualify />
      <PromoteBook />
      <WhyChoose />
      <Pricing />
      <Portfolio />
      <BrandLogos />
      <Process />
      <ContactForm />
      <FrequentlyAskedQuestions />
      <Reviews />
      <BookPromotionFooter />
      <Popup />
    </>
  );
};

export default BookPromotionMarketing;
