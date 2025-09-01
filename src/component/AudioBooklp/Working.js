import Image from "next/image";
import BrandLogos1 from "media/assets/audiobook/work-1.svg"
import BrandLogos2 from "media/assets/audiobook/work-2.svg"
import BrandLogos3 from "media/assets/audiobook/work-3.svg"
import BrandLogos4 from "media/assets/audiobook/work-4.svg"
import BrandLogos5 from "media/assets/audiobook/work-5.svg"
import BrandLogos6 from "media/assets/audiobook/work-6.svg"
import BrandLogos7 from "media/assets/audiobook/work-7.svg"
import BrandLogos8 from "media/assets/audiobook/work-8.svg"
import BrandLogos9 from "media/assets/audiobook/work-9.svg"
import BrandLogos10 from "media/assets/audiobook/work-10.svg"
import BrandLogos11 from "media/assets/audiobook/work-11.svg"
import BrandLogos12 from "media/assets/audiobook/work-12.svg"
import BrandLogos13 from "media/assets/audiobook/work-13.svg"
import BrandLogos14 from "media/assets/audiobook/work-14.svg"
import BrandLogos15 from "media/assets/audiobook/work-15.svg"
import BrandLogos16 from "media/assets/audiobook/work-16.svg"
import BrandLogos17 from "media/assets/audiobook/work-17.svg"
import BrandLogos18 from "media/assets/audiobook/work-18.svg"
import BrandLogos19 from "media/assets/audiobook/work-19.svg"
import BrandLogos20 from "media/assets/audiobook/work-20.svg"
import BrandLogos21 from "media/assets/audiobook/work-21.svg"
import BrandLogos22 from "media/assets/audiobook/work-22.svg"
import BrandLogos23 from "media/assets/audiobook/work-23.svg"
import BrandLogos24 from "media/assets/audiobook/work-24.svg"
import { MRCTA, MRCTAGroup } from "@/component";
const Working = ({ title, desc }) => {
    return (
        <section>
            <div className="mr-lg:pt-[60px] mr-md:pb-[60px] pb-[40px] font-sans">
                <div className="mr-container">
                    <div className="grid mr-lg:grid-cols-12 grid-cols-1 mr-xl:gap-x-5 mr-lg:gap-x-6 gap-8 items-center">
                        <div className="mr-2xl:col-span-5 mr-lg:col-span-6 mr-sm:text-start text-justify">
                            <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-medium mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                            <p className="mr-md:text-[16px] text-sm leading-normal font-normal mr-lg:pr-[40px] pb-4" dangerouslySetInnerHTML={{ __html: desc }} />
                            <div className="flex flex-wrap items-center justify-start mr-md:gap-4">
                                <div className="w-full mr-md:w-max">
                                    <MRCTA link='javascript:;'
                                    link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"
                                        classes="mt-5 w-full !font-medium" animation="__animatedPing" text="Connect With Us!" />
                                </div>
                                <div className="w-full mr-md:w-max">
                                    <MRCTA link='tel:855-666-6675' classes="mt-5 w-full !border !border-black bg-transparent !text-black" animation="__animatedPing" text="Call Us Now!" />
                                </div>
                            </div>
                        </div>
                        <div className="mr-2xl:col-span-7 mr-lg:col-span-6 relative before:content-[''] mr-lg:before:absolute mr-lg:before:top-0 mr-lg:before:left-0 mr-lg:before:h-full mr-lg:before:w-[1px] mr-lg:before:bg-[#CECECE] mr-md:pl-[20px]">
                            <div className={`grid relative mr-sm:grid-cols-4 grid-cols-2 items-center`}>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos1} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos2} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos3} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos4} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos5} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos6} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos7} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos8} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos9} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos10} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos11} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos12} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos13} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos14} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos15} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos16} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos17} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos18} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos19} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4 border-b-2">
                                    <Image src={BrandLogos20} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center mr-md:border-b-0 border-b-2 pb-4 pt-4">
                                    <Image src={BrandLogos21} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center mr-md:border-b-0 border-b-2 pb-4 pt-4">
                                    <Image src={BrandLogos22} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4">
                                    <Image src={BrandLogos23} alt="BrandLogos" className="block" />
                                </div>
                                <div className="bg-transparent h-[90px] px-[20px] flex items-center pb-4 pt-4">
                                    <Image src={BrandLogos24} alt="BrandLogos" className="block" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Working;