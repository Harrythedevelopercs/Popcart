import { MRCTA } from "@/component";
import Image from "next/image";
import BannerBG from "media/book-illustrations/types-of-illustrations/banner2.png"
import SideImage from "media/book-illustrations/types-of-illustrations/sideImage2.png"
const StandOut2 = () => {
    return (
        <section className="font-sans">
            <div className="mr-lg:mt-[40px] mr-lg:py-0 mr-md:py-[60px] py-[40px] relative z-10 mr-lg:bg-transparent bg-primary-100">
                <Image src={BannerBG} alt="banner" className="mr-lg:block hidden absolute mr-xl:top-14 top-0 left-0 right-0 bottom-0 -z-10 w-full mr-xl:h-[85%] h-full mr-md:object-auto object-cover" priority={true} />
                <div className="mr-container">
                    <div className="grid grid-cols-12 items-center mr-lg:gap-x-5 gap-5">
                        <div className="mr-2xl:col-span-5 mr-lg:col-span-6 col-span-12">
                            <div className="text-white mr-sm:text-start text-justify">
                                <h2 className="mr-xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-semibold mb-3">Watch Kids Turn Pages Eagerly with Magical Illustrations!</h2>
                                <p className="mr-md:text-base text-sm leading-normal font-normal">Our dedicated illustrators capture your vision, creating book illustrations that your young audience will adore. We understand the unique needs of both ebooks and print, ensuring your illustrations are perfect from the start. So, breathe easy—your story is in expert hands.</p>
                                <MRCTA text="Get Free Consultation" isPopup={true} classes="__animatedPing !bg-[#000] mt-5 !rounded-full hover:!bg-transparent hover:border-white" />
                            </div>
                        </div>
                        <div className="mr-2xl:col-span-6 mr-lg:col-span-6 col-span-12">
                            <Image src={SideImage} alt="illustrations" className="block mx-auto" />
                        </div>
                        <div className="mr-2xl:col-span-1"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StandOut2;