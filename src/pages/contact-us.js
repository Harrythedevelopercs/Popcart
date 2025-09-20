import React from "react";
import BTM from "../component/bottomLogos";
import CTA from "../component/cta3";
import SwiperComponents from "../component/SwiperComponent";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import ContactModel from "../component/ContactModel";
import { MRCards, MRHero } from "@/component";
import Head from "next/head";
import Logos from "media/images/banner/img2.webp";
const contact = () => {
  const MRCardData2 = [
    {
      classes:
        "bg-[#fff] shadow-lg mr-2xl:px-4 px-2 rounded-xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      stepText: "Step",
      indexing: true,
      content: [
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Submit Your Manuscript",
          desc: "After making up your mind about working with us, you place your order.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Edit & Design",
          desc: "We refine your text and design your book's cover.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Review & Approve",
          desc: "You review our work and give the green light.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Publish & Distribute",
          desc: "Your book is published and distributed on schedule.",
        },
      ],
    },
  ];
  return (
    <>
      <main>
        <Head>
          <title>Contact Us | Broadway Publishers</title>
          <meta
            name="description"
            content="Contact us and get a quote to start with writing, publishing and marketing your book. Start earning royalties by selling your books online."
          />

          <meta
            property="og:url"
            content="https://www.broadwaypublishers.com/contact-us"
          />
          <meta
            property="og:image"
            content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
          />

          {/* canonical: */}
          <link
            rel="canonical"
            href="https://www.broadwaypublishers.com/contact-us"
          />
        </Head>
        <MRHero
          title="Witness Excellence By <br /> Working With The Top <br /> Industry Specialists"
          desc="Your dream of becoming a successful author is our mission. So, don’t hold back; get ahold of us today."
          logos={Logos}
          form={false}
          counter={true}
          classes="!py-[80px] bg-[#fefefe] bg-right bg-center"
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/portrait-woman-customer-service-worker.png')] before:!opacity-100"
        />
        <Enlistedlogo />
        <ContactModel />
        <BTM />
        <CTA />
        <MRCards
          subTitle="Carrying out"
          title={`The Fastest Work Mode, Get Your <br class="mr-xl:block hidden" /> Work in 4 Easy Steps `}
          desc="Working with us gives you prompt delivery of work because we have set up everything systematically. Here is our 4 step process, which keeps us streamlined from the beginning."
          gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-5"
          cta={false}
          variant="steps"
          data={MRCardData2}
        />
        <SwiperComponents />
      </main>
    </>
  );
};

export default contact;
