import Image from "next/image"; 
import React from "react";
import { MRCTA } from "@/component";

// Media
import backgroundImg from "media/children-book-lp/background_img1.png";
import ctaImg from "media/children-book-lp/cta1.png";

export default function PublishAuthor({
  title = "Publish Your Children's Book Now!",
  desc = "We help you publish a beautiful, durable hardcover book with full-color printing, providing you with a professional, retail-ready result. Everything you need to publish a children’s book is right here!",
}) {
  return (
    <section className="py-[50px] mr-lg:py-[80px] relative ">
      <div className="mr-container ">
        <div className="relative mr-lg:w-[90%] w-full mx-auto mr-xl:h-[350px] mr-md:h-[360px] items-center mr-md:py-[70px] py-[30px]">
          <Image
            src={backgroundImg}
            alt="Broadway Publishers"
            width={1000}
            height={500}
            quality={100}
            className="absolute object-cover rounded-[20px] -z-10 w-full h-full top-0 right-0 left-0 bottom-0 shadow-lg"
          />
          <div className="flex flex-col gap-4 items-center justify-center w-[90%] mx-auto text-white mb-8">
            <h3 className="mr-lg:text-[40px] mr-sm:text-[30px] text-[25px] leading-normal font-semibold text-center" dangerouslySetInnerHTML={{ __html: title }} />
            <p className="mr-lg:w-[70%] w-full mx-auto text-[16px] leading-normal text-center" dangerouslySetInnerHTML={{ __html: desc }} />
          </div>
          <div className="grid grid-cols-1 mr-sm:flex mr-md:justify-center justify-center mr-sm:gap-x-5 gap-3 mt-5 mr-lg:mt-10 px-5">
            <MRCTA text=" Get A Free Quote" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" classes="__animatedPing !rounded-[6px] hover:bg-transparent !bg-[#161616] hover:border-white" />
            <MRCTA text="Connect With Us" link="tel:855-666-6675" classes="__animatedPing !rounded-[6px] bg-transparent !border-0 hover:bg-black !bg-white !text-[#161616] hover:border-black" />
          </div>
          <div className="mr-lg:block hidden">
            <Image
              src={ctaImg}
              alt="Broadway Publishers"
              width={1000}
              height={500}
              quality={100}
              className=" absolute z-10 mr-xl:w-[230px] mr-lg:w-[180px] mr-md:w-[150px] mr-xl:h-[220px] h-[200px] top-[6%] left-[-5%] bottom-0 "
            />
            <Image
              src={ctaImg}
              alt="Broadway Publishers"
              width={1000}
              height={500}
              quality={100}
              className=" mr-md:absolute z-10 mr-xl:w-[230px] mr-lg:w-[180px] mr-md:w-[150px] mr-xl:h-[220px] h-[200px] right-[-5%] bottom-[0%] "
            />
          </div>
        </div>
      </div>
    </section >
  );
}
