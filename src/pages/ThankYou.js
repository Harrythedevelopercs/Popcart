import Head from "next/head";
import Script from "next/script";
import React from "react";

const ThankYou = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <section className="w-full bg-white text-[#1d1d1f] py-4 font-secondary">
        <div className="max-w-7xl mx-auto text-center items-center justify-center">
          <h1 className="w-[80%] mx-auto font-bold xs:font-bold text-6xl mt-12 leading-[70px] md:text-4xl xs:text-4xl xs:w-[100%]">
            Thank You
          </h1>
          <p className="w-[60%] text-[16px] md:w-[70%] mx-auto mt-3 xs:w-[90%]">
            We've helped thousands of authors express themselves eloquently, and
            you may be the next! <br /> Hire our top-tier expert writers today
            and imprint your words in your readers' minds forever.
          </p>
          <div className="mx-auto py-2 xs:w-[90%] ">
            <div className="w-[30%] md:w-[60%] mx-auto grid grid-cols-2 grid-rows-1 gap-x-5 py-4 xs:w-[100%]">
              <a
                href="tel:855-666-6675"
                className="bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]"
              >
                Get Started
              </a>
              <a
                href="javascript:$zopim.livechat.window.show()"
                className="bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]"
              >
                Live Chat
              </a>
            </div>
          </div>
          <div className="mx-auto w-[50%] justify-center items-center text-center pb-20 xs:w-[90%] xs:pb-10">
            <img
              src="/assets/images/newimg/professional-ghostwriting.png"
              className="mx-auto"
              alt="professional-ghostwriting"
            />
          </div>
        </div>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11022581138"
        ></Script>
        <Script>
          {`
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11022581138');
          `}
        </Script>
      </section>
    </>
  );
};

export default ThankYou;
