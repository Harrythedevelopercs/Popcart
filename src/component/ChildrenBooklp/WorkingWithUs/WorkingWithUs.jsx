import React from "react";
import AutoScrollSlider from "../AutoScrollSlider";
import Image from "next/image";

// Media
import Client1 from "media/children-book-lp/clients/work-1.svg";
import Client2 from "media/children-book-lp/clients/work-2.svg";
import Client3 from "media/children-book-lp/clients/work-3.svg";
import Client4 from "media/children-book-lp/clients/work-4.svg";
import Client5 from "media/children-book-lp/clients/work-5.svg";
import Client6 from "media/children-book-lp/clients/work-6.svg";
import Client7 from "media/children-book-lp/clients/work-7.svg";
import Client8 from "media/children-book-lp/clients/work-8.svg";
import Client9 from "media/children-book-lp/clients/work-9.svg";
import Client10 from "media/children-book-lp/clients/work-10.svg";
import Client11 from "media/children-book-lp/clients/work-11.svg";
import Client12 from "media/children-book-lp/clients/work-12.svg";
import { MRCTA } from "@/component";

export default function WorkingWithUs({
  title = "Publish Your Book with <span class='text-[#3EA99F] font-normal'> Unmatched Media </span> Exposure",
  desc = "Ready to leave your mark? Reach out today as we make your book stand out with professional publishing services and unparalleled media exposure!",
}) {
  return (
    <section className="pt-[50px] mr-lg:pt-[80px] pb-[50px] mr-lg:pb-[80px]">
      <div className="flex flex-col items-center justify-center gap-3 mb-8">
        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal text-center text-black" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="mr-md:text-base text-sm font-normal leading-normal text-black text-center mr-lg:w-11/12 mr-xl:w-7/12 mx-auto pb-4" dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
      <div>
        <AutoScrollSlider options={{ align: "center" }} wrapperClasses="mt-10 mb-10" direction="forward">
          {[Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10, Client11, Client12].map((imgPortfolio, i) => (
            <div key={i} className="group shrink-0 mr-xl:basis-[15%] mr-lg:basis-[16%] mr-md:basis-[20%] mr-sm:basis-[25%] basis-[30%] min-w-0 pl-5  items-center flex justify-center ">
              <div className="flex items-center justify-center w-full">
                <div className={`relative before:absolute before:content-[''] before:w-[2px] before:h-full before:bg-[#E8E8E8] before:top-0 before:right-[-10px] w-full`}>
                  <Image src={imgPortfolio} alt="Book Marketing" className="object-contain h-[25px] mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </AutoScrollSlider>
        <div className="grid grid-cols-1 mr-sm:flex px-3 justify-center mr-sm:gap-x-5 gap-3 mt-5 mr-lg:mt-14">
          <MRCTA text="Connect With Us!" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" classes="__animatedPing !rounded-[6px] hover:text-black hover:bg-transparent hover:border-black" />
          <MRCTA text="Call Us Now!" link="tel:855-666-6675" classes="__animatedPing !rounded-[6px] bg-transparent !border-0 hover:bg-black !bg-[#161616] !text-white hover:border-black" />
        </div>
      </div>
    </section>
  );
}
