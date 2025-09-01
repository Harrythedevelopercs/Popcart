import { MRCTA } from "@/component";
import Image from "next/image";
// import StandOutBanner from "media/book-marketing-company/standOutBanner.png"
const StandOut = ({ title, desc, bannerBg }) => {
    return (
        <section>
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] font-sans">
                <div className="mr-container">
                    <div className="relative z-10 mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                        <Image src={bannerBg} alt="StandOutBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom rounded-3xl" priority={true}/>
                        <div className="grid grid-cols-12">
                            <div className="mr-lg:col-span-8 mr-sm:col-span-9 col-span-12 mr-sm:ps-12 px-5 mr-sm:text-start text-justify">
                                <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-[600] secondary mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                                <p className="text-base font-normal leading-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                                <MRCTA text="Schedule Your Free Strategy Session!" classes="__animatedPing bg-black text-white mt-6 hover:bg-transparent hover:border-black hover:text-secondary-100" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StandOut;