// Next
import Image from "next/image"
// Media
import CountdownTimer from "@/component/LP-Ten/CountdownTimer"
import CheckIcon from "media/new-lp/lp2/done_blue.png"
import Banner from "media/new-lp/lp2/banner.jpg"
import Ratings from "media/new-lp/lp2/bbb-img.png"
import LogoImage1 from "media/new-lp/lp2/logo-img1.png"
import LogoImage2 from "media/new-lp/lp2/logo-img2.png"
import LogoImage3 from "media/new-lp/lp2/logo-img3.png"
import LogoImage4 from "media/new-lp/lp2/logo-img4.png"
import LogoImage5 from "media/new-lp/lp2/logo-img5.png"
import LogoImage6 from "media/new-lp/lp2/logo-img6.png"
// Components
import { CTA } from "./index"

export default function Hero({ description = "TOP GHOSTWRITERS AT 85% OFF" }) {
  return (
    <section>
      <div className="relative z-10 pt-[180px] pb-[70px]">
        <Image
          src={Banner}
          alt="banner"
          className="absolute -z-10 inset-0 object-cover object-center w-full h-full"
        />
        <div className="mr-container">
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 items-center">
            <div className="mx-auto text-center text-white">
              <CountdownTimer />
              <h1 className="mr-xl:text-[39px] mr-md:text-[35px] mr-sm:text-[30px] text-[23px] leading-tight font-semibold mt-5">
                BECOME A NEWYORK TIMES BEST SELLING AUTHOR!
              </h1>
              <h2 className="mr-md:text-[28px] mr-sm:text-[25px] text-[18px] leading-normal font-normal my-4 max-w-[520px] mx-auto">
                HIRE{" "}
                <span className="text-[#53b5de] font-bold">{description}</span>
                TO CREATE YOUR TIMELESS WORK
              </h2>
              <ul className="flex gap-x-5 gap-y-5 justify-center flex-wrap">
                {[
                  "Trusted by 400+ Authors Globally",
                  "86% of Customers Rehire",
                  "2.5k+ Writers and Editors",
                  "100% Satisfaction Guaranteed",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex tracking-[0.5px] items-center gap-x-1 leading-tight font-normal"
                  >
                    <Image src={CheckIcon} alt="icon" width={20} height={20} />
                    <span className="block text-sm leading-tight uppercase">
                      {e}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-5 my-8">
                <CTA
                  variant="yellow"
                  text="active your coupon"
                  css="!py-4 mr-xl:col-span-6 col-span-12 mr-lg:!w-max !w-full"
                />
                <CTA
                  variant="blue"
                  text="view pricing"
                  css="!py-4 mr-xl:col-span-6 col-span-12 mr-lg:!w-max !w-full"
                />
              </div>
              <Image src={Ratings} alt="ratings" className="mx-auto" />
              <div className="flex flex-wrap gap-y-5 items-center gap-x-8 mt-[60px]">
                {[
                  LogoImage1,
                  LogoImage2,
                  LogoImage3,
                  LogoImage4,
                  LogoImage5,
                  LogoImage6,
                ].map((e, i) => (
                  <Image key={i} src={e} alt="logos" className="mx-auto" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
