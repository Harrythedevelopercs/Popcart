import "@/styles/globals.css";
import "@/styles/custom.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import Headernew from "@/component/Headernew";
import Footer1 from "@/component/Footer1";
import { SfProDisplay, primary, fontMono } from "@/configs/fonts";
import Script from "next/script";
import { useRouter } from "next/router";
import Loader from "@/component/Loader/Loader";
import { PopupProvider } from "@/component/LP-Eight/Popup/PopupContext";
export default function App({ Component, pageProps }) {
  const [loadScript, setLoadScript] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadScript(true), 3000);
    return () => clearTimeout(timer);
  }, []);
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.svg" />
        
      </Head>
      <main
        className={`${primary.className} ${SfProDisplay.variable} ${fontMono.variable} `}
      >
        {router.pathname == "/lp-one" ||
        router.pathname == "/audiobook-production-services" ||
        router.pathname == "/book-marketing-company" ||
        router.pathname == "/case-studies" ||
        router.pathname == "/book-illustration-services" ||
        router.pathname == "/children-book-publishing-lp" ||
        router.pathname == "/lp/book-publishing-company" ||
        router.pathname == "/lp/book-marketing-company" ||
        router.pathname == "/booknewbrand-v2" ||
        router.pathname == "/lp-publishing" ||
        router.pathname == "/lp-publishing-2" ||
        router.pathname == "/lp/book-promotion-marketing" ||
        router.pathname == "/lp/lp1" ||
        router.pathname == "/lp/lp2" ||
        router.pathname == "/lp/lp3" ||
        router.pathname == "/lp/lp4" ||
        router.pathname == "/lp/lp5" ||
        router.pathname == "/lp/book-marketing-lp" ? (
          ""
        ) : (
          <Headernew />
        )}
        {/* {loadScript ? <Component {...pageProps} /> : <Loader />} */}
        <PopupProvider>
          <Component {...pageProps} />
        </PopupProvider>
        {router.pathname == "/book-marketing-company" ||
        router.pathname == "/audiobook-production-services" ||
        router.pathname == "/lp/book-publishing-company" ||
        router.pathname == "/book-illustration-services" ||
        router.pathname == "/children-book-publishing-lp" ||
        router.pathname == "/lp/book-marketing-company" ||
        router.pathname == "/lp/book-promotion-marketing" ||
        router.pathname == "/lp/lp1" ||
        router.pathname == "/lp/lp2" ||
        router.pathname == "/lp/lp3" ||
        router.pathname == "/lp/lp4" ||
        router.pathname == "/lp/lp5" ||
        router.pathname == "/lp-publishing" ||
        router.pathname == "/lp-publishing-2" ? (
          ""
        ) : (
          <Footer1 />
        )}
      </main>
      {loadScript && (
        <>
          
        </>
      )}
    </>
  );
}
