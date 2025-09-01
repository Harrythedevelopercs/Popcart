import { MRCards, MRContact, MRHero, MRLibarySphere } from "@/component";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import CTA from "../component/cta3";
import BTM from "../component/bottomLogos";
import SwiperComponents from "../component/SwiperComponent";
import Head from "next/head";
import React from "react";
import Robert from "media/ahsan/robert.png";
import Dave from "media/ahsan/dave.png";
import Carol from "media/ahsan/carol.png";
import William from "media/ahsan/william.png";
import Katy from "media/ahsan/katy.png";
import Janet from "media/ahsan/janet.png";
import Bronson from "media/ahsan/bronson.png";
import Becky from "media/ahsan/becky.png";
import Logos from "media/images/banner/img2.webp";
const MRLibarySphereData = [
  {
    classes:
      "bg-[#fff] shadow-lg px-3 rounded-2xl relative pb-3 p-3 mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#2d2d2d] hover:!text-white text-center",
    cta: true,
    content: [
      {
        image: Robert,
        title: "Robert A.Jr",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.",
      },
      {
        image: Dave,
        title: "Dave Brown",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.",
      },
      {
        image: Carol,
        title: "Carol Norbert",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.",
      },
      {
        image: William,
        title: "William Smith",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.",
      },
      {
        image: Katy,
        title: "Katy .A",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.",
      },
      {
        image: Janet,
        title: "Janet Gill",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.",
      },
      {
        image: Bronson,
        title: "Bronson",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.",
      },
      {
        image: Becky,
        title: "Becky Maxwell",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas gravida posuere. Curabitur elementum dui id diam dignissim faucibus.",
      },
    ],
  },
];

const authorWebsites = () => {
  return (
    <>
      <main>
        <Head>
          <title>Author Websites Services | Broadway Publishers</title>
          <meta name="description" content="" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
        </Head>
        <MRHero
          title="Featured Authors"
          desc="For over a decade, we have been helping thousands of authors turn their publishing dreams into reality!"
          logos={Logos}
          counter={true}
          classes="!py-[80px] bg-[#fefefe]"
          beforeImg="mr-md:before:bg-[url('../../public/ahsan/smiling-woman-with-laptop.png')]"
        />
        <Enlistedlogo />
        <MRCards
          subTitle="Want Help To"
          title="Get Featured In The Next Bestseller Authors List?"
          desc={`Our clientele is editing agencies, well-known companies, publishing houses, and many best-selling authors. We are a well-known business in the ghostwriting sector, and we have been successfully reaching authors' publication goals for over a decade. We make certain that your book reaches the heights it deserves!`}
          gridsClasses="mr-lg:grid-cols-4 mr-md:grid-cols-3"
          data={MRLibarySphereData}
          cta="true"
        />
        <BTM />
        <CTA />
        <SwiperComponents />
        <MRContact />
      </main>
    </>
  );
};

export default authorWebsites;
