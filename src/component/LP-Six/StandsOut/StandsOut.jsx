// Next
import Image from "next/image"
// Components
import { MRCTA } from "@/component"
// Media
import Icon1 from "media/lp-six/icons/5.png"
import Icon2 from "media/lp-six/icons/6.png"
import Icon3 from "media/lp-six/icons/7.png"
import Icon4 from "media/lp-six/icons/8.png"
import Icon5 from "media/lp-six/icons/9.png"
import Icon6 from "media/lp-six/icons/10.png"
import BestSeller from "media/lp-six/stands_out/1.png"

const StandsOut = () => {
  return (
    <section>
      <div className="py-[100px] bg-[#F3F3F3]">
        <div className="mr-container">
          <div className="flex mr-md:flex-nowrap gap-5 flex-wrap items-center justify-between">
            <div className="max-w-[800px]">
              <h2 className="font-mono font-normal mr-xl:text-[45px] mr-lg:text-[40px] mr-sm:text-[30px] text-[25px] leading-tight mb-3">
                Book Marketing Agency In USA That Stands Out In Every Feature
              </h2>
              <p className="mr-md:text-base text-sm leading-normal font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <MRCTA
              text="Get In Touch With Us"
              classes="hover:bg-[linear-gradient(270.25deg,_#0B0E1000_0.41%,_#51677600_0.13%)] bg-primary-100  !text-white text-[20px] leading-tight font-semibold !rounded-[50px] bg-[linear-gradient(270.25deg,_#0B0E10_15.41%,_#516776_79.13%)]"
              link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"
            />
          </div>
          <div className="grid grid-cols-12 gap-10 items-center pt-[70px]">
            <div className="mr-lg:col-span-9 col-span-12">
              <div className="grid grid-cols-2 mr-xl:gap-10 gap-5">
                {[
                    [Icon1,"Book Marketing Specialists","A seasoned team of book publicists."],
                    [Icon2,"Fast Turnaround","We promise instant results to our clients."],
                    [Icon3,"Personalised Services","Marketing strategies are custom-tailored."],
                    [Icon4,"Fair Pricing For All","Our quotations are free from hidden charges."],
                    [Icon5,"Strong After-Sales Support","Regular reports to monitor the progress."],
                    [Icon6,"No Threat To Privacy","You can expect confidential services from us."],
                ].map(([icon,title,desc], i) => (
                  <div key={i} className="group shadow-[6px_6px_30px_0px_#0000000F] bg-white rounded-[20px] p-5 flex items-center gap-x-5">
                    <div className="bg-[#F3F3F3] group-hover:bg-[#65C7E4] transition-all ease-in-out duration-300 p-4 rounded-full">
                      <Image src={icon} alt="icons" />
                    </div>
                    <div>
                      <h4 className="font-mono font-normal mr-2xl:text-[25px] mr-xl:text-[22px] text-[18px] leading-tight mb-2 text-[#0B0E10]">
                        {title}
                      </h4>
                      <span className="block text-base font-normal leading-tight text-[#0B0E10]">
                        {desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mr-lg:col-span-3 col-span-12">
                <Image src={BestSeller} alt="best_seller"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StandsOut
