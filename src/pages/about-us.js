import React from "react";
import IM from "../component/impressiveWorks1";
import BTM from "../component/bottomLogos";
import CTA from "../component/cta3";
import SwiperComponents from "../component/SwiperComponent";
import LogoSliders from "../component/LogoSlider";
import DM1 from "../component/demandingSpecilaist1";
import BW1 from "../component/bookWriting1";
import { MRCards, MRHero } from "@/component";
import Head from "next/head";

const about = () => {
  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call("maximize");
    }
  };
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
          desc: "Start your publishing process by sharing your manuscript with us.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Edit & Design",
          desc: "We add our artistic expertise while retaining your unique voice.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Review & Approve",
          desc: "We will NEVER go above your head! Your approval matters, and we want to ensure our creative contributions align with your vision.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Publish & Distribute",
          desc: "Witness your book being published and reaching readers across the globe.",
        },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>About Us - Broadway Publishers</title>
        <meta
          name="description"
          content="Get to know all about Broadway Publishers and the amazing books that we have published and marketed so far. Connect with us and get a quote now!"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.broadwaypublishers.com/about-us"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.broadwaypublishers.com/about-us"
        />
      </Head>
      <main>
        <MRHero
          // subTitle="Awarded #1 Book Publishing Services"
          title="About US"
          desc="Are you in search of the perfect partner to publish your book? We’re so glad you have found us! "
          fullImg="mr-lg:bg-[url('../../public/assets/images/newimg/editing-banner.png')]"
          classes="bg-right bg-center mr-lg:!py-[200px]"
          form={false}
        />
        <LogoSliders />
        <IM
          title="Every Project Is Treated Like a Work of Art"
          desc={"We don't just think outside the box — we obliterate it."}
        />
        <DM1
          title="Our Specialists Are Always in Demand"
          desc={
            "Ever wondered what makes a story truly captivating?  It combines linguistic finesse, creative brilliance, and technical know-how perfectly. And guess what? Our team of writing experts has it all! From crafting compelling narratives to distilling complex information into accessible content, they're the wizards behind our communication success."
          }
        />
        <BW1
          title="Let the Finest Writers Guide You!"
          desc={`How cool would it be to team up with the greatest literary minds?
          You'd get insider insights, hands-on guidance, and a huge boost in credibility for your book. They'll walk you through the publishing like a pro, ensuring your masterpiece gets the spotlight it deserves.`}
          descs={`Plus, having a well-known writer in your corner? That's a game-changer. 
          Moreover, being associated with a celebrated writer can enhance your reputation as an author, positioning you as a rising star in the literary world. With their guidance and support, your book has the potential to resonate with readers on a deeper level.
          `}
        />

        <CTA
          subtitle="Your Project Deserves the Spotlight."
          title="Let’s Get Started!"
          desc="Do you need a hand with book publishing? <span class='h-3 block'></span> We're all ears and ready to help whenever you need us during our operational hours. We're here to chat about anything on your mind — your questions and needs matter most to us."
        />
        <BTM />
        <MRCards
          title={`Dreams Don’t Turn to Dust with <br class="mr-xl:block hidden" /> Broadway Publishers `}
          desc="Your dreams matter to us. We understand that there is nothing more painful for a writer than to witness their written word go to waste. We know exactly how to publish your work and emphasize it in unimaginable ways that will leave the readers wanting more."
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

export default about;
