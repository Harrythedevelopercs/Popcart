import { MRCTA } from "@/component";
import Image from "next/image";
import bannerBg from "media/lp-four/standOutBanner.png"
import SideImage from "media/lp-four/standOutSideImage.png"
const StandOut = ({ title, desc }) => {
    return (
        <section>
            <div className="mr-lg:pb-[80px] mr-md:pb-[60px] pb-[40px] font-sans">
                <div className="mr-container">
                    <div className="relative z-10 mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                        <Image src={bannerBg} alt="StandOutBanner" className="absolute mr-xl:top-24 left-0 right-0 bottom-0 -z-10 w-full mr-xl:h-[75%] h-full object-cover rounded-3xl" priority={true} />
                        <div className="grid grid-cols-12 mr-lg:gap-0 gap-5 items-center">
                            <div className="mr-2xl:col-span-6 mr-xl:col-span-7 mr-lg:col-span-6 col-span-12 mr-sm:ps-12 px-5 mr-sm:text-start text-justify">
                                <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-[600] secondary mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                                <p className="text-base font-normal leading-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                                <div className="grid grid-cols-1 mr-sm:flex mr-sm:gap-x-5 gap-5 mt-5">
                                    <MRCTA text="Let’s Chat!" classes="__animatedPing !bg-[#2E2E2E] text-white mr-lg:mt-6 hover:!bg-black hover:border-black hover:text-white" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" />
                                    <MRCTA text="Call Us Now!" link="tel:8556666675" classes="__animatedPing bg-white !text-black mr-lg:mt-6 hover:bg-transparent hover:border-black hover:text-secondary-100" />
                                </div>
                            </div>
                            <div className="mr-2xl:col-span-6 mr-xl:col-span-5 mr-lg:col-span-6 col-span-12">
                                <Image src={SideImage} alt="books" className="block mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StandOut;