import {
  BestSellerBooks,
  BrandsLogos,
  ClientsImage,
  ContactForm,
  Footer,
  Header,
  Hero,
  JourneyForm,
  JourneyStart,
  MadeEasy,
  Packages,
  Process,
  SelfPublishing,
  Testimonials,
  CtaSection,
} from "@/component/Lp-Seven-2";
import { Popup } from "@/component/LP-Eight";

import { MRVideoTestimonials } from "@/component";
import Head from "next/head";
import Script from "next/script";

export default function LpPublishing() {
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
      <BrandsLogos />
      {/* <ClientsImage /> */}
      <JourneyForm />
      <BestSellerBooks />
      <CtaSection />
      {/* <Packages />
      <Testimonials /> */}
      {/* Video Testimonials Section */}
      <MRVideoTestimonials colorChange={true} />
      {/* Video Testimonials Section */}
      <Process />
      <SelfPublishing />
      <JourneyStart />
      <MadeEasy />
      <ContactForm />
      <Footer />
      <Popup
        popupDesc={`HIRE <strong>TOP Publishers AT 85% OFF</strong> TO CREATE YOUR TIMELESS WORK`}
      />
    </>
  );
}
