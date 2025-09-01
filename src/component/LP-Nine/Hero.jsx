// Next
import Image from "next/image"
// Media
import CountdownTimer from "@/component/LP-Nine/CountdownTimer"
import CheckIcon from "media/new-lp/lp1/done_blue.png"
import SideImage from "media/new-lp/lp1/lp-bn-img.jpg"
// Components
import { CTA } from "./index"

export default function Hero({ description = "TOP GHOSTWRITERS AT 85% OFF" }) {
  return (
    <section>
      <div className="pt-[150px] pb-[70px] border-[14px] border-[#f4ede7]">
        <div className="mr-container">
          <div className="grid mr-lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 items-center">
            <div className="max-w-[520px]">
              <CountdownTimer />
              <h1 className="mr-xl:text-[39px] mr-md:text-[35px] mr-sm:text-[30px] text-[23px] leading-tight text-[#333] font-bold mt-5">
                BECOME A NEWYORK TIMES BEST SELLING AUTHOR!
              </h1>
              <h2 className="mr-md:text-[28px] mr-sm:text-[25px] text-[18px] leading-normal font-normal my-4">
                HIRE{" "}
                <span className="text-[#16beb5] font-bold">
                  {description}
                </span>
                TO CREATE YOUR TIMELESS WORK
              </h2>
              <ul className="flex gap-x-5 gap-y-5 flex-wrap">
                {[
                  "Trusted by 400+ Authors Globally",
                  "86% of Customers Rehire",
                  "2.5k+ Writers and Editors",
                  "100% Satisfaction Guaranteed",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-x-1 leading-tight font-semibold"
                  >
                    <Image src={CheckIcon} alt="icon" />
                    <span className="block text-sm leading-tight uppercase">
                      {e}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-12 gap-x-7 gap-y-5 mt-8">
                <CTA
                  variant="yellow"
                  text="active your coupon"
                  css="!py-4 mr-xl:col-span-6 col-span-12 mr-lg:!w-max !w-full"
                />
                <CTA
                  text="view 85% off pricing"
                  css="!py-4 mr-xl:col-span-6 col-span-12 mr-lg:!w-max !w-full"
                />
                <CTA
                  variant="red"
                  text="chat to get 85% off"
                  css="!py-4 col-span-12 mr-lg:!w-max !w-full mr-xl:mx-auto"
                />
              </div>
            </div>
            <div>
              <Image
                src={SideImage}
                alt="bannerImage"
                priority
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
