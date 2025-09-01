// Next
import Image from "next/image"
import Link from "next/link"
// Media
import Icon1 from "media/lp-six/icons/1.png"
import Icon2 from "media/lp-six/icons/2.png"
import Icon3 from "media/lp-six/icons/3.png"
import Icon4 from "media/lp-six/icons/4.png"
import ArrowRight from "media/lp-six/icons/arrow.svg"

const Services = () => {
  return (
    <section>
      <div className="mr-lg:py-[100px] mr-md:py-[80px] mr-sm:py-[60px] py-[40px]">
        <div className="mr-container">
          <div className="text-center max-w-[600px] mx-auto">
            <h2 className="font-mono font-normal mr-lg:text-[45px] mr-md:text-[40px] mr-sm:text-[35px] text-[25px] leading-tight mb-3">
              Our Book Marketers For Hire Who Cover All Your Needs
            </h2>
            <p className="mr-md:text-base text-sm leading-normal font-normal max-w-[550px] mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="grid mr-lg:grid-cols-4 mr-sm:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-10 mr-md:pt-[80px] pt-[50px]">
            {[
              [Icon1, "Non-Fiction Book Marketing"],
              [Icon2, "Business Book Marketing"],
              [Icon3, "Fiction Book Marketing"],
              [Icon4, "Self-help Book Promotion"],
            ].map(([img, title], i) => (
              <div
                key={i}
                className="relative overflow-hidden group h-[318px] flex flex-col justify-center items-center rounded-[36px] shadow-[6px_6px_30px_0px_#0000000F]"
              >
                <div className="bg-[#F3F3F3] group-hover:bg-[#65C7E4] transition-all ease-in-out duration-300 px-8 py-5 rounded-full">
                  <Image src={img} alt="icons" />
                </div>
                <h4 className="font-mono font-normal text-[25px] leading-normal max-w-[180px] text-center my-5">
                  {title}
                </h4>
                <Link
                  href="#"
                  className="inline-block absolute bottom-0 transition-all duration-300 ease-in-out translate-y-full group-hover:-translate-y-7 hover:ms-5"
                >
                  <Image src={ArrowRight} alt="icons" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
