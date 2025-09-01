// Next
import Image from "next/image";
// Media
import CheckIcon from "media/lp-seven/icons/check.png";
import Banner from "media/lp-seven/book_banner.jpg";
// Components
import { CTA } from "./index";
import { MRCTAGroup } from "@/component";
const Hero = () => {
  return (
    <section>
      <div className="mr-lg:pt-[100px] mr-md:pt-[80px] pt-[50px] pb-[40px] relative z-10">
        <Image
          src={Banner}
          alt="banner"
          priority
          draggable={false}
          className="absolute -z-10 inset-0 w-full h-full object-cover mr-lg:object-center object-left bg-red-400"
        />
        <div className="mr-container">
          <div className="max-w-[550px]">
            <h1 className="mr-lg:text-[34px] mr-md:text-[30px] text-[22px] leading-tight font-bold mb-[20px]">
              Bring Your Book To Life With Our Professional Book Publishing
            </h1>
            <ul>
              {[
                "Book Editing, Proofreading, Formatting & Typesetting.",
                "Free Exclusive Consultation with Writing Coach.",
                "Free Book Cover Design with up to 10 Revisions.",
                "Free ISBN",
                "Publishing in e-book and paperback formats.",
                "10 Printed paperbacks shipped down to your doorstep",
              ].map((e, i) => (
                <li key={i} className="flex items-start gap-x-2">
                  <Image src={CheckIcon} alt="icon" />
                  <span className="block text-black mr-lg:text-[19px] mr-md:text-[16px] text-[14px] leading-tight mb-2">
                    {e}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mr-md:flex hidden items-center gap-x-5 mt-10">
              <CTA   handle="parent.LC_API.open_chat_window();return false;"/>
              {/* <div
                dangerouslySetInnerHTML={{
                  __html: `<a 
      href="javascript:;" 
      class="w-full mr-md:w-max h-[50px] rounded-md flex items-center !px-10 font-sans font-semibold justify-center border-2 transition-all" 
      onclick="parent.LC_API.open_chat_window();return false;">
        124
    </a>`,
                }}
              /> */}
              <CTA
                text="Call Now"
                link="tel:8556666675"
                variant="secondary"
                svgClasses="border border-black rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
