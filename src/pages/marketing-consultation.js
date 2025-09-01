import Head from "next/head";
import React from "react";
import {
  MRCards,
  MRContact,
  MRHero,
  MRLibarySphere,
  MRServices,
  MRTable,
} from "@/component";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import CTA from "../component/cta3";
import BTM from "../component/bottomLogos";
import SwiperComponents from "../component/SwiperComponent";

import Profitable from "media/ahsan/profit.png";
import Affordable from "media/ahsan/affordable.png";
import Professional from "media/ahsan/professional.png";
import Qualified from "media/ahsan/qualified.png";
import Logos from "media/images/banner/img2.webp";
const MRCardData = [
  {
    classes:
      "bg-[#fff] shadow-lg px-3 rounded-2xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#3EA99F] hover:!text-white text-center",
    content: [
      {
        title: "Profitable <br/> Content",
        icon: Profitable,
      },
      {
        title: "Affordable <br/> Pricing",
        icon: Affordable,
      },
      {
        title: "Professional <br/> Excellence",
        icon: Professional,
      },
      {
        title: "Qualified <br/> Experts",
        icon: Qualified,
      },
      {
        title: "Secure <br/> Ownership",
        icon: Profitable,
      },
      {
        title: "Editing & <br/> Proofreading",
        icon: Affordable,
      },
      {
        title: "Secure <br/> Ownership",
        icon: Qualified,
      },
      {
        title: "Editing & <br/> Proofreading",
        icon: Qualified,
      },
    ],
  },
];
const videoTrailer = () => {
  return (
    <>
      <main>
        <Head>
          <title>
            Marketing Consultation Services | Broadway Publishers
          </title>
          <meta name="description" content="" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
        </Head>
        <MRHero
          title="Exceptional Marketing Consultation Services"
          desc="Lead the industry by publishing books that generate sales and client acquisition. We are a one-of-a-kind marketing tool."
          logos={Logos}
          counter={true}
          classes="!py-[80px] bg-[#fefefe]"
          beforeImg="mr-md:before:bg-[url('../../public/ahsan/young-woman-reading-book-home.png')]"
        />

        <Enlistedlogo />
        <MRServices
          title="Skyrocket Your Sales With Our Marketing Services"
          desc="Experience a surge in sales like never before with our cutting-edge marketing services. Our strategic approach and innovative techniques will elevate your brand, captivate your audience, and drive unprecedented growth in your sales."
        />
        <MRCards
          title="Here Writers Come To Get Their Books <br class'hidden mr-lg:block'/> Published Be A Part Of The Literary Sphere!"
          desc="Embark on your literary journey with us, where writers find the gateway to publish their books and become integral contributors to the vibrant literary sphere. Join our community and witness your literary dreams come to life."
          gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[100%] mx-auto"
          classes="bg-[url('../../public/imageAR/our-comprehensive.png')] bg-no-repeat bg-cover bg-center"
          cta={false}
          variant="icons"
          data={MRCardData}
          theme="dark"
        />
        <MRTable
          title="You Can Be The Next Best-Seller Author. <br class'hidden mr-lg:block'/> Start Your Journey Smartly With The Discount Offer!"
          desc="Fuel your literary ambitions with our comprehensive support, from expert editing to strategic marketing, ensuring your book stands out in the crowded market. Take advantage of our exclusive discount today and set the stage for your unparalleled success in the world of literature."
        />
        <BTM />
        <CTA />
        <SwiperComponents />
        <MRContact />
      </main>
    </>
  );
};

export default videoTrailer;
