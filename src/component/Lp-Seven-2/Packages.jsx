// Next
import Image from "next/image"
// Packages JSON File
import packageData from "media/lp-seven/data.json"
// Media
import CheckIcon from "media/lp-seven/icons/check_red.png"
import BestSellerIcon from "media/lp-seven/icons/best.png"
// Components
import { CTA } from "./index"
const Packages = () => {
  return (
    <section>
      <div className="mr-md:py-[80px] py-[50px]">
        <div className="mr-container">
          <div className="text-center">
            <h2 className="mr-lg:text-[34px] mr-md:text-[30px] text-[22px] leading-tight font-bold mb-[30px]">
              BOOK PUBLISHING PACKAGES
            </h2>
          </div>
          <div className="grid mr-xl:grid-cols-3 mr-md:grid-cols-2 grid-cols-1 mr-md:gap-y-28 gap-y-20 gap-5 max-w-[1100px] mx-auto">
            {packageData.map((packageItem, i) => (
              <div
                key={i}
                className="relative transition-all ease-in-out duration-300 group hover:bg-[#8f181b] hover:text-white bg-[#f5f5f5] text-center shadow-[0_0_20px_2px_rgb(92_92_92_/_40%)] p-[10px] border-t-[5px] border-[#000] rounded-[10px]"
              >
                {packageItem.name === "Bestseller Publishing Bundle" && (
                  <Image
                    src={BestSellerIcon}
                    alt="Best Seller Icon"
                    className="absolute w-[45%] mr-md:-right-16 -right-6 -top-28"
                  />
                )}
                <h3 className="text-[25px] leading-tight font-bold mt-3 mb-5">
                  {packageItem.name}
                </h3>
                <ul className="text-start h-[450px] overflow-y-auto">
                  {packageItem.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-x-2 mb-3 text-base font-normal leading-normal"
                    >
                      <Image
                        src={CheckIcon}
                        alt="icon"
                        width={20}
                        height={20}
                        className="group-hover:brightness-0 group-hover:invert"
                      />
                      <span className="block">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center items-center gap-x-5 mt-10 mb-5">
                  <CTA
                     handle="parent.LC_API.open_chat_window();return false;"
                    css="group-hover:bg-white group-hover:border-white group-hover:!text-black"
                  />
                  <CTA
                    text="Call Now"
                    link="tel:8556666675"
                    variant="secondary"
                    css="group-hover:border-white group-hover:text-white"
                    svgClasses="border border-black rounded-full group-hover:border-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages
