// Next
import Image from "next/image"
// Media
import Logo from "media/our-reviews/bspWhiteLogo.svg"
// Components
import { CTA } from "./index"

export default function Header() {
  return (
    <header>
      <div className="absolute z-20 w-full py-8">
        <div className="mr-container">
          <div className="flex flex-wrap gap-y-5 items-center mr-md:justify-between justify-center">
            <a href="#" className="text-decoration-none block">
              <Image
                priority
                quality={100}
                src={Logo}
                alt="Broadway Publishers"
                width={180}
                height={50}
              ></Image>
            </a>
            <div className="flex flex-wrap gap-y-5 justify-center items-center gap-x-3">
              <CTA
                isPopup={false}
                link="tel:+18556666675"
                text="+1 (855) 666 6675"
                css="mr-sm:!px-[42px] !px-3 mr-sm:!text-[15px] !text-[13px]"
              />
              <CTA
                css="mr-sm:!px-[42px] !px-3 mr-sm:!text-[15px] !text-[13px]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
