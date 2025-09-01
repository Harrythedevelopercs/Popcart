import Image from "next/image";
import Banner from "media/book-illustrations/heroBanner.png"
import { MRCTA } from "@/component";
import Logos from "../Logos/LogosCarousal";
import PortfolioCarousal from "../PortfolioCarousal/PortfolioCarousal";
const Hero = () => {
    return (
        <section className="font-sans">
            <div className="relative z-10 pt-[100px] pb-[50px]">
                <Image src={Banner} alt="heroBanner" className="absolute bg-primary-100 top-0 left-0 right-0 bottom-0 -z-10 w-full h-[85%] object-cover" priority={true} />
                <div className="mr-container">
                    <div className="mr-sm:text-center text-white mr-2xl:w-[70%] mr-md:w-[75%] w-full mx-auto">
                        <h1 className="mr-xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] mb-3 leading-normal font-semibold">See Your Story Spark Joy With Enchanting Children’s Book Illustrations!</h1>
                        <p className="mr-md:text-base text-sm font-normal leading-normal">Our children’s book illustrations are perfect for both ebooks and print. We capture the essence of your story and craft breathtaking visuals that dance off the page.</p>
                        <div className="grid grid-cols-1 mr-sm:flex justify-center mr-sm:gap-x-5 gap-5 mt-8">
                            <MRCTA text="Connect With Us!" isPopup={true} classes="__animatedPing !rounded-full hover:bg-transparent hover:border-white" />
                            <MRCTA text="Call Us Now!" link="tel:855-666-6675" classes="__animatedPing !rounded-full bg-transparent border-white hover:bg-black hover:border-black" />
                        </div>
                    </div>
                    <Logos />
                </div>
                <PortfolioCarousal />
            </div>
        </section>
    )
}
export default Hero;