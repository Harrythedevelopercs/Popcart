// Nexr
import Image from "next/image"
// Components
import { MRCTA } from "@/component"
// Media
import TelIcon from "media/lp-six/icons/call.svg"
import Hero_Books from "media/lp-six//hero/books.png"
import Avaters from "media/lp-six//icons/avaters.png"
import Stars from "media/lp-six//icons/stars.svg"

const Hero = () => {
  return (
    <section>
      <div className="relative z-10 mr-2xl:pt-[218px] mr-xl:pt-[150px] mr-lg:pt-[100px] mt-lg:pb-[70px] py-[60px]">
        <span className="block w-full h-full absolute -z-10 top-0 left-0 right-0 bottom-0 bg-[linear-gradient(177.69deg,_#0B0E10_1.94%,_#516776_123.25%)]"></span>
        <Image
          src={Hero_Books}
          alt="Hero_Books"
          priority
          className="mr-lg:block hidden mr-lg:w-[45%] h-full mr-lg:absolute -z-10 mr-lg:top-0 mr-lg:right-0 mr-lg:bottom-0"
        />
        <div className="mr-container">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="mr-lg:col-span-7 col-span-12">
              <div className="text-white">
                <span className="block text-primary-100 mr-2xl:text-[20px] mr-md:text-[18px] text-base leading-normal font-medium">
                  #1 Book Marketers
                </span>
                <h1 className="font-mono font-normal mr-2xl:text-[50px] mr-xl:text-[40px] mr-sm:text-[35px] text-[20px] leading-tight my-3">
                  Our Book Marketing Company Helps Authors Become Bestsellers!
                </h1>
                <p className="mr-2xl:text-lg mr-md:text-base text-sm leading-normal mr-2xl:max-w-[730px] max-w-[650px] font-light">
                  We help you break through the noise by connecting your book
                  with ideal readers. Our strategic book marketing services
                  drive sustainable book sales, boost your book’s visibility,
                  and ensure lasting success for your author brand!
                </p>
                <div className="grid grid-cols-1 mr-md:flex gap-6 mt-8">
                  <MRCTA
                    text="Get In Touch With Us"
                    classes="hover:bg-white !text-[#0B0E10] text-[20px] leading-tight font-semibold !rounded-full"
                    link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"
                  />
                  <a
                    href="tel:855-666-6675"
                    className="group w-full mr-md:w-max h-[50px] rounded-full bg-transparent hover:bg-white flex gap-2 items-center !px-10 font-sans font-semibold justify-center border-2 transition-all"
                  >
                    <Image
                      src={TelIcon}
                      width={15}
                      height={15}
                      alt="Amazon Book Publishing"
                      className="block transition-all ease-in-out duration-300 brightness-100 invert group-hover:brightness-0 group-hover:invert-0"
                    />
                    <span className="block text-white font-semibold group-hover:!text-[#0B0E10]">
                      855-666-6675
                    </span>
                  </a>
                </div>
                <div className="flex items-center flex-wrap gap-5 mr-sm:divide-x-2 mr-sm:divide-y-0 divide-y-2 divide-[#0081A7] mr-xl:pt-[120px] mr-md:pt-[80px] pt-[50px]">
                  <div>
                    <Image src={Avaters} alt="avaters" />
                  </div>
                  <div className="mr-sm:ps-5 pt-5">
                    <Image src={Stars} alt="stars" />
                    <span className="block mr-2xl:text-[20px] mt-2 mr-md:text-[18px] text-base leading-tight font-medium">
                      30k+ Rated Best Book Marketers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
