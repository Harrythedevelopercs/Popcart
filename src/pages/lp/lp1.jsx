// Next
import Head from "next/head"
import Script from "next/script"
// Components
import { Popup } from "@/component/LP-Eight"
import {
  About,
  Authors,
  BestSeller,
  Brands,
  Features,
  Footer,
  Header,
  Hero,
  Portfolio,
  Reviews,
} from "@/component/LP-Nine"


const LandingPage1 = () => {
  return (
    <>
      <Head>
        <title>BECOME A BEST SELLING AUTHOR AT 85% OFF!</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
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
      <Authors />
      <About />
      <Portfolio />
      <Features />
      <BestSeller />
      <Reviews />
      <Brands />
      <Footer />
      <Popup popupDesc="HIRE <strong>TOP GHOSTWRITERS AT 85% OFF</strong> TO CREATE YOUR TIMELESS WORK" />
    </>
  )
}

export default LandingPage1
