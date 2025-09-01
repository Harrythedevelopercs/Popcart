// Next
import Image from "next/image"
// Component
import { CTA } from "./index"
// Media
import BookImage from "media/lp-seven/menuscript-img.webp"
import Shape from "media/lp-seven/bubble-shape.png"

const SelfPublishing = () => {
  return (
    <section>
      <div className="relative overflow-hidden z-10 mr-xl:pt-[150px] mr-xl:pb-[100px] mr-xl:py-0 mr-lg:py-[100px] mr-md:py-[80px] py-[40px] bg-white">
        <Image
          src={Shape}
          alt="shape"
          className="absolute mr-lg:block hidden -z-10 -left-10 top-12 w-full h-[85%] object-contain object-left-top"
        />
        <Image
          src={Shape}
          alt="shape"
          className="absolute mr-lg:block hidden -z-10 -right-48 bottom-0 w-[60%] h-[60%] object-contain object-right-bottom"
        />
        <div className="mr-container">
          <div className="grid mr-lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 items-center">
            <div className="max-w-[600px]">
              <h2 className="mr-xl:text-[40px] mr-lg:text-[32px] mr-md:text-[30px] text-[22px] leading-tight font-bold mb-[20px]">
                Transform Your Manuscript into a Best-Seller with expert
                self-publishing service
              </h2>
              <p className="mr-xl:text-lg mr-md:text-base text-sm leading-normal font-normal text-[#333]">
                Broadway Publishers delivers end-to-end book publishing
                services. We help you professionally design, publish a book, and
                promote books on the platform of your choosing. It’s our goal to
                make life easy for aspiring authors and be the go-to book
                publisher for new authors. Our professionals have the industry
                knowledge and experience to help you effectively navigate the
                publishing process. We coordinate with the support team of
                publishing websites and design dedicated promotional strategies
                to increase your conversions on these platforms.
              </p>
              <div className="flex items-center gap-x-5 mt-5">
                <CTA
                   handle="parent.LC_API.open_chat_window();return false;"
                />
                <CTA
                  text="Call Now"
                  link="tel:8556666675"
                  variant="secondary"
                  svgClasses="border border-black rounded-full"
                />
              </div>
            </div>
            <div>
              <Image
                src={BookImage}
                width={291}
                height={500}
                alt="bookImage"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SelfPublishing
