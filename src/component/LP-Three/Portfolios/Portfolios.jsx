import Image from "next/image";
import PortfolioImage1 from "media/book-illustrations/portfolio/12.png"
import PortfolioImage2 from "media/book-illustrations/portfolio/13.png"
import PortfolioImage3 from "media/book-illustrations/portfolio/14.png"
import Sun from "media/book-illustrations/sun.png"
import Moon from "media/book-illustrations/moon.png"
import { MRCTA } from "@/component";
const Portfolios = () => {
    return (
        <section className="font-sans" id="portfolio">
            <div className="relative z-10 mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                <Image src={Moon} alt="icons" className="absolute mr-lg:block hidden left-6 bottom-10 -z-10 w-[100px] h-auto object-cover" priority={true} />
                <Image src={Sun} alt="icons" className="absolute mr-lg:block hidden top-6 right-6 bottom-0 -z-10 w-[100px] h-auto object-cover" priority={true} />
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-xl:w-[60%] mr-lg:w-[70%] mr-md:w-[90%] w-full mx-auto">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal mb-3">Book Illustrations Portfolio</h2>
                        <p className="mr-md:text-base text-sm leading-normal font-normal">We could talk for hours, about the passion our book illustrators put into every piece, but the best thing is to see their dedication in the illustrations. </p>
                    </div>
                    <div className="grid mr-md:grid-cols-3 grid-cols-1 mr-md:gap-x-3 gap-5 items-center mr-md:mt-[60px] mt-[40px]">
                        <div className="w-full h-full">
                            <Image src={PortfolioImage1} alt="portfolios" className="block h-full" />
                        </div>
                        <div className="w-full h-full">
                            <Image src={PortfolioImage2} alt="portfolios" className="block h-full w-full" />
                        </div>
                        <div className="w-full h-full">
                            <Image src={PortfolioImage3} alt="portfolios" className="block h-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mr-sm:flex justify-center mr-sm:gap-x-5 gap-5 mr-md:mt-16 mt-10">
                        <MRCTA text="Connect With Us!" isPopup={true} classes="__animatedPing !rounded-full hover:bg-transparent hover:border-black hover:text-[#000]" />
                        <MRCTA text="Call Us Now!" link="tel:855-666-6675" classes="__animatedPing !rounded-full bg-transparent !border-black !text-black hover:bg-black hover:!text-white hover:border-black" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Portfolios;