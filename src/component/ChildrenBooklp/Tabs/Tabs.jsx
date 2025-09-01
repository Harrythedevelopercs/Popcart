import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MRCTA } from "@/component";

// media
import Arrow from "media/children-book-lp/arrow.png";
import Ingramspark from "media/children-book-lp/IngramSpark.svg";
import Lulu from "media/children-book-lp/lulu.svg";
import Walmart from "media/children-book-lp/walmart.svg";
import Amazon from "media/children-book-lp/amazon.svg";
import AppleBooks from "media/children-book-lp/apple-books.svg";
import Google from "media/children-book-lp/google.svg";

const tabsList = [
  ["Ingramspark Publishing", 1],
  ["Lulu Book Publishing", 2],
  ["Walmart", 3],
  ["Amazon KDP", 4],
  ["Apple Books", 5],
  ["Google Books", 6],
];
const tabData = {
  1: {
    title: "<span class='text-[#3EA99F] font-normal'>IngramSpark </span> Publishing",
    description: "IngramSpark is one of the top platforms for independent authors, making your book available to retailers worldwide, including major stores like Amazon, Barnes & Noble, and more.It provides you with control over your book pricing, distribution, and royalties, making it a great choice for authors who want broad reach while maintaining control over their work.<br /> <br /> We provide publishing services for IngramSpark through which you can distribute your books to any reader anywhere in the world.Our team guides you through every step of the process in IngramSpark publishing, from preparing your manuscript to ensuring it meets the platform's requirements. We help you set up your book for print-on-demand, so you can sell your book without any upfront printing costs or inventory management.",
    image: Ingramspark,
  },
  2: {
    title: "<span class='text-[#3EA99F] font-medium'>Lulu Book </span> Publishing",

    description: "Lulu is an excellent site for authors who wish to self-publish their book in an uncomplicated and flexible way. You are allowed to publish your print books and e-books in different types of book formats on Lulu, such as hardcover, paperback, or electronic format. <br /><br /> We make it simple for you to get started with Lulu.Our book publishing team will guide you through each step, from preparing your manuscript to formatting your book and setting up your account on Lulu.Lulu also offers print - on - demand services, so your book is printed only when ordered, saving you the hassle of inventory management and reducing upfront costs.Your published book may be routed to key online retailers like Amazon and Barnes & Noble, enabling you to reach readers in every part of the globe.",
    image: Lulu,
  },
  3: {
    title: "<span class='text-[#3EA99F] font-medium'>Walmart </span>Publishing",

    description: "Publishing with Walmart makes perfect sense for authors seeking to sell books directly to readers in one of the biggest marketplaces in the world. Walmart Marketplace is an opportunity to reach out to millions of people in the United States and beyond. <br /><br /> Our Walmart publishing services, help you get your book listed on their platform, ensuring it’s available to a wide range of readers.We handle everything from setting up your account to formatting your manuscript according to Walmart’s requirements.Whether you want to sell your book in print or as an e - book, we’ll ensure it’s optimized for the platform.Publishing your book through Walmart opens up very large markets both in print and digital formats.",
    image: Walmart,
  },
  4: {
    title: "<span class='text-[#3EA99F] font-medium'>Amazon KDP</span> Publishing",

    description:
      "Amazon KDP is the most popular in the world for self - publishing.You can publish your e - book and print book, both, on this platform, and it grants you access to millions of readers from Amazon.We can make your book go live in front of readers on Amazon KDP without wasting even a single minute of your time. <br /> <br /> Our team of book publishers takes you through each step of the KDP publishing process, from manuscript formatting to producing a professionally designed cover.Amazon KDP does print - on - demand, so you will not have to worry about upfront printing costs.Plus, you have full control over pricing and royalties, and Amazon pays those directly to you.With our expertise, you’ll have everything you need to publish your book and start selling on the world’s largest online marketplace.",
    image: Amazon,
  },
  5: {
    title: "<span class='text-[#3EA99F] font-medium'>Apple</span> Books",

    description: "Apple Books is an amazing publishing channel, giving authors a direct guarantee of access to readers of Apple devices worldwide. From first-time author to seasoned writer, Apple Books is one of the best options for reaching a global tech-savvy readership. <br /><br />Using our Apple Books publishing services, we help you in your journey of creating and publishing an e - book that's perfectly formatted for Apple's platform—thereby assuring you that your book will be available for millions of iPad, iPhone, and Mac users.We walk you through manuscript preparation, cover design that captures the spirit of your story, and formatting of your e - book to create a look that is professional and easy to read on Apple devices.Apple Books also puts you in charge of the book's pricing, and you get a royalty for every sale.",
    image: AppleBooks,
  },
  6: {
    title: "<span class='text-[#3EA99F] font-medium'>Google</span> Books",

    description:
      "Google Books is a great opportunity to publish your book and make it accessible to readers all over the world. Your work will be found through Google's vast network and can be bought with ease; thus, readers will have an easy time finding your book using Google Search and Google Play. <br /><br />We will format your manuscript to satisfy the requirements of Google, so that your book looks phenomenal on every digital device. Whether publishing an e-book or a print book, we'll do all the techy stuff to get your book up and ready for distribution through Google. You will also have the freedom to set your own pricing and receive royalties from each sale. With Google Books, publishing will let you reach millions of readers worldwide with your book.",
    image: Google,
  },
};

export default function Tabs({
  title = "Customized  <span class='text-[#3EA99F] font-normal'> Book Publishing Solutions </span> For Every Platform",
  desc = "We provide customized publishing solutions for authors writing childrens books, tailored to fit their specific needs. Our children book publication services make the publishing process easy, professional, and seamless, helping you bring your book to life across multiple platforms.",
}) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <section className="pt-[50px] mr-lg:pt-[80px] pb-[50px] mr-lg:pb-[80px]">
      <div className="mr-container">
        <div className="flex flex-col items-center justify-center gap-3 mb-5">
          <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal text-center text-black" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="mr-md:text-base text-sm font-normal leading-normal text-black text-center mr-lg:w-11/12 mr-xl:w-8/12 mx-auto pb-8 mr-2xl:pb-14" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>

        <div className="grid grid-cols-12 gap-5 items-center">
          <div className="mr-md:col-span-5 mr-lg:col-span-4 col-span-12 ">
            <div className="group flex mr-md:flex-col mr-md:gap-0 gap-3 mr-md:flex-nowrap overflow-x-scroll mr-md:py-0 py-3">
              {tabsList?.map(([text, id]) => (
                <button
                  key={id}
                  className={`mr-md:py-5 mr-md:px-4 p-1 mr-xl:w-[80%] w-full mx-auto text-[20px] text-left pl-5 cursor-pointer flex items-center justify-between border-[1px] border-[#f3f3f3] gap-3 ${activeTab == id ? "bg-[#3EA99F] text-[#fff] rounded-[10px]" : ""
                    }`}
                  onClick={() => handleTabClick(id)}
                >
                  <div className="flex items-center flex-nowrap gap-x-3 mr-md:w-full w-[200px] py-2">
                    <span
                      className={`relative  w-[15px] h-[15px] rounded-full border-2 before:content-[''] before:absolute before:top-[2.4px] mr-2xl:before:top-[2.5px] before:left-[2.4px] mr-2xl:before:left-[2.5px] before:w-[7px] before:h-[7px]  before:rounded-full ${activeTab == id ? "bg-[#3EA99F] p-1 border-black before:bg-[#000]" : " before:bg-[#D2D2D2] border-[#D2D2D2] "
                        }`}
                    ></span>
                    <h3 className="font-semibold mr-xl:text-[18px] text-[14px]"> {text}</h3>
                  </div>

                  {activeTab == id ? <Image src={Arrow} alt="Broadway Publishers" className="mr-md:block hidden" width={30} height={30} /> : ""}
                </button>
              ))}
            </div>
          </div>
          <div className="mr-md:col-span-7 mr-lg:col-span-8 col-span-12">
            {tabData[activeTab] && (
              <div>
                <h6 className="mr-lg:text-[30px] text-[20px] font-primary font-semibold text-[#3EA99F]">
                  {tabData[activeTab].subtitle}
                </h6>
                <div className="flex mr-md:flex-row flex-col-reverse items-center justify-start gap-x-5 mr-lg:gap-x-9 relative mr-xl:w-8/12 mb-5">
                  <h3 className="mr-lg:text-[30px] mr-md:text-[20px] text-[25px] font-primary mr-md:leading-[40px] font-semibold relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:h-[30px] mr-md:before:w-[2px] mr-md:before:right-[-18px] mr-md:before:top-[2px] mr-md:before:translate-y-[2px] mr-md:before:bg-[#DBDBDB]" dangerouslySetInnerHTML={{ __html: tabData[activeTab].title }} />
                  <Image src={tabData[activeTab].image} loading="eager" priority quality={95} className="mr-md:mr-auto mr-xs:mx-auto" alt={tabData[activeTab].subtitle} />
                </div>

                <p className="mr-lg:text-[16px] text-[12px] mr-lg:leading-[25px] font-normal leading-normal mr-lg:pr-10" dangerouslySetInnerHTML={{ __html: tabData[activeTab].description }} />

                <div className="grid grid-cols-1 mr-sm:flex mr-md:justify-start justify-center mr-sm:gap-x-5 gap-5 mt-5 mr-lg:mt-10">
                  <MRCTA text="Talk To An Expert" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" classes="__animatedPing !rounded-[6px] hover:bg-transparent hover:text-black hover:border-black" />
                  <MRCTA text="Call Us Now" link="tel:855-666-6675" classes="__animatedPing !rounded-[6px] bg-transparent !border-0 hover:bg-black !bg-[#161616] !text-white hover:border-black" />
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
