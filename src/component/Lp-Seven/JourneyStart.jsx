// Next
import Image from "next/image"
// Media
import CheckRight from "media/lp-seven/icons/check_red.png"
import SideImage1 from "media/lp-seven/looking-1.webp"
import SideImage2 from "media/lp-seven/looking-2.png"
// Componetns
import { CTA } from "./index"
const JourneyStart = () => {
  return (
    <section>
      <div className="relative overflow-hidden z-10 mr-md:py-0 py-[50px]">
        <div className="before:absolute before:inset-0 before:object-cover before:object-center before:bg-[url(../../public/lp-seven/journy-bg.png)] before:w-full before:h-full before:bg-fixed" />
        <div className="grid grid-cols-12 place-content-between">
          <div className="mr-md:col-span-3 mr-md:block hidden">
            <Image
              src={SideImage1}
              alt="banner"
              className="w-full m-auto ms-3 mr-xl:h-[530px] h-[500px] object-fill"
            />
          </div>
          <div className="mr-md:col-span-6 col-span-12 flex flex-col items-center justify-center">
            <div className="mr-md:max-w-[690px] mr-md:px-0 px-[0.5rem] max-w-[500px] my-auto mx-auto text-center">
              <h2 className="mr-lg:text-[34px] mr-md:text-[25px] text-[22px] leading-tight font-bold mb-[20px]">
                Start Your Journey With Us To Get Your Ideas Published
              </h2>
              <p className="mr-lg:text-base text-sm leading-normal font-normal text-[#333]">
                We are here to support you in conquering your dream. We offer
                comprehensive writing services, including the following:
              </p>
              <ul className="flex flex-wrap items-center mr-xl:justify-around gap-x-5 mr-md:mx-4 gap-y-2 mr-md:mt-[30px] mt-[20px]">
                {[
                  "Book Publication",
                  "Book Covers & Formatting",
                  "Audiobooks",
                  "Website and SEO writing",
                  "Blog Writing",
                  "Article Writing",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="mr-lg:basis-auto basis-full flex items-center gap-x-2 text-[#8f181b]"
                  >
                    <Image
                      src={CheckRight}
                      alt="icon"
                      width={22}
                      height={22}
                      className="shrink-0"
                    />
                    <span className="mr-xl:text-xl mr-lg:text-lg mr-md:text-base text-sm font-extrabold">
                      {e}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center items-center gap-x-5 mr-md:mt-10 mt-8">
                <CTA handle="parent.LC_API.open_chat_window();return false;" />
                <CTA
                  text="Call Now"
                  link="tel:8556666675"
                  variant="secondary"
                  svgClasses="border border-black rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 mr-md:col-span-3 mr-md:flex hidden items-end justify-end">
            <span className="bg-[#8f181b] mr-xl:w-[400px] w-[250px] mr-xl:h-[400px] h-[250px] absolute -z-10 rounded-full mr-3xl:inset-[70px_0_0_30px] mr-xl:inset-[70px_0_0_20px] inset-[240px_0_0_10px]"></span>
            <Image
              src={SideImage2}
              alt="banner"
              className="w-[400px] h-[394px] object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneyStart
