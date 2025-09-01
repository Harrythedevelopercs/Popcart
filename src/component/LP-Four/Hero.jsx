// Media
import Bg from "media/lp-four/herobg.png"
import Logo1 from "media/lp-four/heroLogo1.svg"
import Logo2 from "media/lp-four/heroLogo2.svg"
// Next
import Image from "next/image"
// Components
import { MRCTA } from "@/component"
import { Hero3dSlider } from "./"

export default function Hero() {
    return (
        <section>
            <div className="relative pt-[100px] mr-md:pt-[80px] pb-[50px] z-10 bg-gray-700">
                <Image src={Bg} alt="Bg" fill={true} className="object-cover object-center -z-10" priority={true} />
                <div className="mr-container h-full flex flex-col justify-center relative">
                    <div className="grid grid-cols-1 mr-lg:grid-cols-2 items-center gap-5">
                        <div>
                            <h1 className="text-white mr-xs:text-[26px] mr-sm:text-[35px] mr-md:text-[55px] mr-lg:text-[36px] mr-xl:text-[43px] mr-2xl:text-[50px] font-semibold leading-snug mb-[20px]">Grow Your Readership 10X With Our Expert Book Publishing Services!</h1>
                            <p className="mr-xs:text-justify text-[16px] mr-lg:text-[15px] mr-2xl:text-[17px] font-normal text-white leading-relaxed !mb-[20px] mr-lg:!mb-[30px] block">Dominate sales and visibility with Broadway Publishers, a premium-grade book publishing company that has helped over 500 authors reach bestseller status!</p>
                            <div className="flex gap-4 mb-[50px]">
                                <MRCTA link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" text="Let’s Chat!" classes="mr-xs:!px-5" />
                                <MRCTA link="tel:8556666675" text="Call Us Now!" classes="bg-white mr-xs:!px-5 !text-black" />
                            </div>
                            <Image src={Logo1} alt="logo" className="mb-[30px]" />
                            <Image src={Logo2} alt="logo" />
                        </div>
                        <div className="overflow-hidden mt-[30px] mr-lg:mt-0">
                            <Hero3dSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}