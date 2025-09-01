import { MRCTA } from "@/component";
import Image from "next/image";
import Book from "media/book-marketing-company/book.png"
const StandOut = ({ title, desc, bannerBg }) => {
    return (
        <section>
            <div className="relative z-10 mr-lg:py-[80px] mr-md:py-[60px] py-[40px] font-sans">
                <Image src={bannerBg} alt="StandOutBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority={true} />
                <div className="mr-container">
                    <div className="py-[20px]">
                        <div className="grid grid-cols-12 mr-lg:gap-0 gap-5 items-center">
                            <div className="mr-2xl:col-span-6 text-white mr-lg:col-span-7 col-span-12 mr-sm:text-start text-justify">
                                <h2 className="mr-xl:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-[600] secondary mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                                <p className="text-base font-normal leading-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                                <MRCTA text="Get Free Consultation" classes="__animatedPing bg-black text-white mt-6 hover:bg-transparent hover:border-black hover:text-secondary-100" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" />
                            </div>
                            <div className="mr-2xl:col-span-6 mr-lg:col-span-5 col-span-12 relative">
                                <Image src={Book} alt="books" className="block mx-auto mr-xl:absolute mr-2xl:-top-[230px] mr-xl:-top-[170px] mr-xl:left-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StandOut;